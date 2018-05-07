import React, { Component } from 'react';
import Tips             from './tips-list.jsx'

class PhotoListVenues extends Component {
  render () {

    let list = [];
console.log(this.props.state.displayingVenue)
    if (this.props.state.displayingVenue.photos.groups[0]) {
      let venuePhotos = this.props.state.displayingVenue.photos.groups[0].items

      for (let venuePhoto of venuePhotos) {
        let image = `${venuePhoto.prefix}300x300${venuePhoto.suffix}`
        let userImage = "";
        if (venuePhoto.user) {
          userImage =
          <div className="photo-by-user">
            <div className="user-photo-square">
              <img className="user-photo" src={`${venuePhoto.user.photo.prefix}300x300${venuePhoto.user.photo.suffix}`} alt="user"/>
            </div>
            <div className="user-name">
              {venuePhoto.user.firstName}
              {venuePhoto.user.lastName}
            </div>
          </div>
        }

        list.push(
          <div className="venue-list-item" key={venuePhoto.id} >
            <img className="venue-list-image" key={venuePhoto.id} src={image} alt="venue"/>
            {userImage}
          </div>
        )
      }
    }


    return (
        <div className="venue-list">
          {list}
          <Tips venueTips={this.props.state.displayingVenue.tips.groups}/>
      </div>

      )
  }
}

export default PhotoListVenues
