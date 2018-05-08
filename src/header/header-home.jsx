
import React, { Component } from 'react';
import Background   from '../images/background/background.png'
import Logo         from '../images/logo/logo.png'
import Search       from './search-form.jsx'

class HeaderHome extends Component  {
  render () {

    return (
       <div className="home">
          <img  src={Background} alt="background"
                className="background" />
          <div className="starting-info">
            <img src={Logo} alt="logo" className="logo" />
            <h2 className="title"> Lorem ipsum dolor sit!</h2>
            <p className="description"> Tempor sunt elit do amet laborum aliqua qui dolor eiusmod sunt adipisicing sed. Enim tempor quis nisi deserunt non pariatur ad non labore irure enim.</p>
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

export default HeaderHome;


