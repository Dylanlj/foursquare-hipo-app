import React, { Component } from 'react';

class RecentSearches extends Component {


  render () {

    let unformattedSearches = this.props.searches;
    let searches = [];

    for (let i = 0; i < unformattedSearches.length; i++) {
      let divider = (<div className="item-list-divider"/>)
      if(i === unformattedSearches.length - 1) {
        divider = ""
      }
      searches.push(
        <div key={i}>
          <div key={i} className="recent-search-item" onClick={() => {this.props.reSearching(unformattedSearches[i])}}>
            {unformattedSearches[i].query} in {unformattedSearches[i].place}
          </div>
          {divider}
        </div>
      )
     }

    return (
      <div className="item-container-list">
        <h4> Recent Searches </h4>
        <div className="item-list-title-divider"/>
        {searches}
      </div>
    )
  }
}

export default RecentSearches;

