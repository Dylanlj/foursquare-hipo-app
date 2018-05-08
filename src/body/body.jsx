import React, { Component } from 'react';
import PhotoListVenues from './photo-list-venues.jsx'
import PhotoListDisplay from './photo-list-display.jsx'
import '../css-styles/photo-list.css'
import '../css-styles/search-tips-lists.css'


class PhotoList extends Component  {
  render () {

    if (this.props.state.status === "search-found") {
      return (
        <PhotoListVenues
          state={this.props.state}
          displayVenue={this.props.displayVenue}
          reSearching={this.props.reSearching}
        />
      )
    } else if (this.props.state.status === "display-venue") {

      return (
        <PhotoListDisplay
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


