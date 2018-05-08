import React, { Component } from 'react';
import DisplayLogo  from '../images/logo/display-logo.png'

class HeaderDisplay extends Component  {
  render () {
    let venue = this.props.state.displayingVenue
    let image = "http://www.seetorontonow.com/wp-content/uploads/2018/03/toronto-flatiron-building-copyright-@nguxentravels-from-instagram.jpg"
    if (venue.bestPhoto) {
      image = `${venue.bestPhoto.prefix}500x235${venue.bestPhoto.suffix}`
    }
    let categoryIcon = `${venue.categories[0].icon.prefix}64${venue.categories[0].icon.suffix}`
    let venueRating = ""
    if (venue.rating) {
      venueRating = (
        <div className="venue-rating-square" style={{backgroundColor: "#" + venue.ratingColor}}>
          <div className="venue-rating">
            {venue.rating}
          </div>
        </div>
      )
    }

    let phoneNumber = ""
    if (venue.contact.phone) {
      phoneNumber = (
        <div className="venue-info">
          <div className="material-icons">call</div>
          {" " + venue.contact.phone}
        </div>
      )
    }

    let visualPriceTier = ""

    if (venue.price) {
      let visualTierLevels = [<div className="bar tier-one" key={venue.id + "1"}/>]
      if (venue.price.tier >=2) {
        visualTierLevels.push(<div className="bar tier-two" key={venue.id + "2"}/>)
      }
      if (venue.price.tier >=3) {
        visualTierLevels.push(<div className="bar tier-three" key={venue.id + "3"}/>)
      }
      if (venue.price.tier >=4) {
        visualTierLevels.push(<div className="bar tier-four" key={venue.id + "4"}/>)
      }
      visualPriceTier = (
        <span className="price-tier">
          <div className="material-icons">label</div>
          <span className="base">
            {visualTierLevels}
          </span>
        </span>
      )
    }

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
            {phoneNumber}
          <div className="venue-info">
            <div className="material-icons">person </div>
            {" " + venue.hereNow.count}
              {visualPriceTier}
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderDisplay;


