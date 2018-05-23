import React, { Component } from 'react';
import AboutUs      from './footer.jsx'
import Header       from './header/header.jsx'
import Body    from './body/body.jsx'


require('dotenv').config()

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: "home",
      venues: [],
      previousSearches: [],
      displayingVenue: "",
      error: "",
      searchTerms: {
        query: "",
        place: ""
      }
    }
  }

  findVenues = (event) => {
    if (event) {
      event.preventDefault()
    }
    const request = require('request');
    request({
      url: 'https://api.foursquare.com/v2/venues/search',
      method: 'GET',
      qs: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        near: this.state.searchTerms.place,
        query: this.state.searchTerms.query,
        radius: 550,
        v: '20180323',
        limit: 10
      }
    }, function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        if(!JSON.parse(body).meta.errorType) {
          let venues = JSON.parse(body).response.venues
          this.setState({status: "search-found"}, () => {this.getVenueDetails(venues)})
          let searches = this.state.previousSearches
          if (searches.length === 20) {
            searches = searches.shift()
          }
          if(event) {
            searches.push({query: this.state.searchTerms.query, place: this.state.searchTerms.place})
          }
          this.setState({searches: searches, error: ""})
        } else {
          this.setState({error: `Couldn't find ${this.state.searchTerms.query} near ${this.state.searchTerms.place}`})
        }
      }
    }.bind(this));
  }

  backToSearch = () => {
    this.setState({status: "search-found"})
  }

  getVenueDetails = (venues) => {
    const request = require('request');
    let allVenueDetails = []
    for (let venue of venues) {
      request({
        url: 'https://api.foursquare.com/v2/venues/' + venue.id,
        method: 'GET',
        qs: {
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          v: '20180323',
        }
      }, function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          allVenueDetails.push(JSON.parse(body).response.venue)
          this.setState({status: "search-found", venues: allVenueDetails})
        }
      }.bind(this));
    }
  }

//I was trying to see if a photo request would give more photos, but still only getting two photos per venue
  displayVenue = (venue) => {
       this.setState({status: "display-venue", displayingVenue: venue})
  }

  handleVenueChange = (event) => {
    this.setState({searchTerms:
      {query: this.state.searchTerms.query, place: event.target.value}})
  }

  handleQueryChange = (event) => {
    this.setState({searchTerms:
      {query: event.target.value, place: this.state.searchTerms.place}})
  }

  reSearching = (pastSearch) => {
    this.setState({searchTerms:
      {query: pastSearch.query, place: pastSearch.place}}, this.findVenues)
  }

  render() {
    return (
      <div className="App">
        <Header
        findVenues={this.findVenues}
        handleQueryChange={this.handleQueryChange}
        handleVenueChange={this.handleVenueChange}
        state={this.state}
        />
        <Body
        state={this.state}
        displayVenue={this.displayVenue}
        reSearching={this.reSearching}
        />
        <AboutUs
          status={this.state.status}
          backToSearch={this.backToSearch}
        />
      </div>
    );
  }
}

export default App;


