import React, { Component } from 'react';
import PhotoListDisplay from './photo-list-display.jsx'
import PhotoListVenues from './photo-list-venues.jsx'
import '../styles/photo-list.css'
import '../styles/search-tips-lists.css'


class PhotoList extends Component  {
  render () {

    if (this.props.state.status === "search-found") {
      return (
        <PhotoListDisplay
          state={this.props.state}
          displayVenue={this.props.displayVenue}
        />
      )
    } else if (this.props.state.status === "display-venue") {

      return (
        <PhotoListVenues
          state={this.props.state}
        />
        )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default PhotoList;


