import React, { Component } from 'react';
import HeaderHome   from './header-home.jsx'
import HeaderDisplay from './header-display.jsx'


class FrontPage extends Component {

  render () {
    if (this.props.state.status !== "display-venue") {
      return (
        <HeaderHome
          state={this.props.state}
          findVenues={this.props.findVenues}
          handleQueryChange={this.props.handleQueryChange}
          handleVenueChange={this.props.handleVenueChange}
        />
      )
    } else {
      return (<HeaderDisplay state={this.props.state}/>)
    }
  }
}

export default FrontPage;
