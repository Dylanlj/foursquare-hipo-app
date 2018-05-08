import React, { Component } from 'react';

class AboutUs extends Component  {
  render () {
    let divider = ""
    let linkToSearchPage = ""
    if (this.props.status !== "home") {
      divider = <div className="footer-divider"/>
      if(this.props.status === "display-venue") {

        linkToSearchPage = (<div className="back-to-search" onClick={this.props.backToSearch}>Back To Search</div>)
      }
    }
    return (
      <footer className="about">
        {divider}
        <span> Blog </span>
        <span> About Us </span>
        <span> Contact </span>
        {linkToSearchPage}
      </footer>
    )
  }
}

export default AboutUs;
