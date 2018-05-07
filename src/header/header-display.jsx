import React, { Component } from 'react';
import DisplayLogo  from '../images/logo/display-logo.png'

class HeaderDisplay extends Component  {
  render () {


    let venue = this.props.state.displayingVenue

    let image = "http://www.seetorontonow.com/wp-content/uploads/2018/03/toronto-flatiron-building-copyright-@nguxentravels-from-instagram.jpg"

    if (venue.bestPhoto) {
      image = `${venue.bestPhoto.prefix}500x234${venue.bestPhoto.suffix}`
    }
    let categoryIcon = `${venue.categories[0].icon.prefix}64${venue.categories[0].icon.suffix}`
    let venueRating = ""
    if (venue.rating) {
      venueRating = (
        <div classID="venue-rating-square">
          <div className="venue-rating">
            {venue.rating}
          </div>
        </div>)
    }

    let visualTierLevels = [<div className="bar tier-one"/>]

    if (venue.price.tier >=2) {
      visualTierLevels.push(<div className="bar tier-two"/>)
    }
    if (venue.price.tier >=3) {
      visualTierLevels.push(<div className="bar tier-three"/>)
    }
    if (venue.price.tier >=4) {
      visualTierLevels.push(<div className="bar tier-four"/>)
    }

    let visualPriceTier = (
      <span className="base">
        {visualTierLevels}
      </span>)

    return (
      <div className="display-venue">
        <img src={image} alt="venue background" className="background venue-image"/>
        {venueRating}
        <div className="category-icon-square">
          <img src={categoryIcon} alt="category icon" className="category-icon"/>
           <img src={categoryIcon} alt="category icon" className="category-icon"/>
        <img src={categoryIcon} alt="category icon" className="category-icon"/>
        </div>
        <img src={DisplayLogo} alt="logo" className="display-venue-logo" />
        <div className="venue-info-bar">
          <div className="background-gradient"/>
          <div className="venue-title">{venue.name}</div>
          <div className="venue-info">
            <div className="material-icons">place </div>
            {" " + venue.location.address}
          </div>
          <div className="venue-info">
            <div className="material-icons">call </div>
            {" " + venue.contact.formattedPhone}
            </div>
          <div className="venue-info">
            <div className="material-icons">person </div>
            {" " + venue.hereNow.count}
            <span className="price-tier">
              <div className="material-icons">label</div>
              {visualPriceTier}
            </span>
          </div>

        </div>
      </div>

    )

  }
}

export default HeaderDisplay;


