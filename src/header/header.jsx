import React, { Component } from 'react';
import HeaderHome   from './header-home.jsx'
import HeaderVenues from './header-venues.jsx'
import HeaderDisplay from './header-display.jsx'
import '../styles/search.css'
import '../styles/header.css'

class FrontPage extends Component {

  render () {
    if (this.props.state.status === "home") {
      return (
        <HeaderHome
          findVenues={this.props.findVenues}
          handleQueryChange={this.props.handleQueryChange}
          handleVenueChange={this.props.handleVenueChange}
          />
      )
    } else if (this.props.state.status === "search-found") {
      return (
        <HeaderVenues
          findVenues={this.props.findVenues}
          handleQueryChange={this.props.handleQueryChange}
          handleVenueChange={this.props.handleVenueChange}
        />
      )
    } else {
      return (
      <HeaderDisplay state={this.props.state}/>
      )
    }
  }
}

export default FrontPage;
