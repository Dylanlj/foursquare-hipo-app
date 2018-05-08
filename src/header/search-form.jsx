import React, { Component } from 'react';

class Search extends Component  {

  render () {
    return (
      <form className="search-form" onSubmit={this.props.findVenues}>
        <input type="text" className="food-search" placeholder="I'm looking for" onChange={this.props.handleQueryChange}/>
        <input type="text" className="place-search" placeholder="Place" onChange={this.props.handleVenueChange}/>
        <button type="submit" className="search-button material-icons">search</button>
      </form>
    )
  }
}

export default Search;
