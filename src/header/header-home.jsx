
import React, { Component } from 'react';
import Background   from '../images/background/background.png'
import Logo         from '../images/logo/logo.png'
import Search       from './search-form.jsx'
import DisplayLogo  from '../images/logo/display-logo.png'

class HeaderHome extends Component  {
  render () {
    let startInfo
    let classState = this.props.state.status

    if(this.props.state.status === "home") {
      startInfo = (
        <div>
          <img src={Logo} alt="logo" className="logo" />
          <h2 className="title"> Lorem ipsum dolor sit!</h2>
          <p className="description"> Tempor sunt elit do amet laborum aliqua qui dolor eiusmod sunt adipisicing sed. Enim tempor quis nisi deserunt non pariatur ad non labore irure enim.</p>
        </div>
        )
    } else {
       startInfo = <img src={DisplayLogo} alt="logo" className="logo"/>
    }

    return (
      <div className={classState}>
        <img  src={Background} alt="background"
              className="background" />
        <div className="starting-info">
          {startInfo}
          <Search
          findVenues={this.props.findVenues}
          handleQueryChange={this.props.handleQueryChange}
          handleVenueChange={this.props.handleVenueChange}
          />
        </div>
        <div className="error-message"> {this.props.state.error} </div>
      </div>
    )
  }
}

export default HeaderHome;
