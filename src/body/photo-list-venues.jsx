import React, { Component } from 'react';
import RecentSearches   from './recent-search-list.jsx'
class PhotoListVenues extends Component {

  render () {
    let venues = this.props.state.venues

    let list = []
      for (let venue of venues) {
        let image
        let ratingPresence = "venue-list-rating-square no-rating"

        let visualTierLevels = [<div className="bar tier-one" key={venue.id + "1"}/>]
        if (venue.price) {
          if (venue.price.tier >=2) {
            visualTierLevels.push(<div className="bar tier-two" key={venue.id + "2"}/>)
          }
          if (venue.price.tier >=3) {
            visualTierLevels.push(<div className="bar tier-three" key={venue.id + "3"}/>)
          }
          if (venue.price.tier >=4) {
            visualTierLevels.push(<div className="bar tier-four" key={venue.id + "4"}/>)
          }
        } else {
          visualTierLevels = ""
        }

        let visualPriceTier = (
          <span className="base" >
            {visualTierLevels}
          </span>
        )

        if (venue.rating) {
          ratingPresence = "venue-list-rating-square"
        }
        if(venue.bestPhoto) {
          image = `${venue.bestPhoto.prefix}300x300${venue.bestPhoto.suffix}`
        } else {
          image = "http://www.seetorontonow.com/wp-content/uploads/2018/03/toronto-flatiron-building-copyright-@nguxentravels-from-instagram.jpg"
        }
        list.push(
          <div className="photo-grid-item" key={venue.id} onClick={() => {this.props.displayVenue(venue)}}>
            <img className="photo-grid-image" key={venue.id} src={image} alt="venue"/>
              <div className={ratingPresence} style={{backgroundColor: "#" + venue.ratingColor}}>
                <div className="venue-list-rating">
                  {venue.rating}
                </div>
              </div>
            <div className="venue-name">{venue.name}</div>
            <div className="people-count">
              <div className="divider"></div>
              <div className="material-icons">person</div>
              {" " + venue.hereNow.count}
              <span className="price-tier">
                <div className="material-icons">label</div>
                {visualPriceTier}
              </span>
            </div>
          </div>
        )
      }
    return (
        <div className="show-venues">
          <RecentSearches
            searches={this.props.state.previousSearches}
            reSearching={this.props.reSearching}
          />
          <div className="photo-grid">
            {list}
          </div>
        </div>
      )
  }
}

export default PhotoListVenues;
