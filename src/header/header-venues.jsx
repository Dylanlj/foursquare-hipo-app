import React, { Component } from 'react';
import Background   from '../images/background/background.png'
import DisplayLogo  from '../images/logo/display-logo.png'
import Search       from './search-form.jsx'

class HeaderVenues extends Component  {
  render () {

    return (
      <div className="search-found">
        <img  src={Background} alt="background"
              className="background" />
        <div className="starting-info">
          <img src={DisplayLogo} alt="logo" className="logo" />
          <Search
          findVenues={this.props.findVenues}
          handleQueryChange={this.props.handleQueryChange}
          handleVenueChange={this.props.handleVenueChange}
          />
        </div>
      </div>
    )
  }
}

export default HeaderVenues;


