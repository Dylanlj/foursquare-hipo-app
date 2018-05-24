import React, { Component } from 'react';
import Tips             from './tips-list.jsx'

class PhotoListDisplay extends Component {
  render () {

    let list = [];
    if (this.props.state.displayingVenue.photos.groups[0]) {
      let venuePhotos = this.props.state.displayingVenue.photos.groups[0].items
      for (let venuePhoto of venuePhotos) {
        let image = `${venuePhoto.prefix}300x300${venuePhoto.suffix}`
        let userImage = "";
        if (venuePhoto.user) {
          userImage =
          <div className="photo-of-user-container">
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
          <div className="photo-grid-item" key={venuePhoto.id} >
            <img className="photo-grid-image" key={venuePhoto.id} src={image} alt="venue"/>
            {userImage}
          </div>
        )
      }
    }
    let style = {gridTemplateRows: `repeat(${list.length}, auto)`}
    return (
      <div className="display-venue-body">
        <Tips venueTips={this.props.state.displayingVenue.tips.groups}/>
        <div className="photo-grid" style={style}>
          {list}
        </div>
      </div>
    )
  }
}

export default PhotoListDisplay
