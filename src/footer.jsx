import React, { Component } from 'react';

class AboutUs extends Component  {
    render () {
      let divider = ""
      if (this.props.status !== "home") {
        divider = <div className="footer-divider"/>
      }

      return (
        <footer className="about">
          {divider}
          <span> Blog </span>
          <span> About Us </span>
          <span> Contact </span>
        </footer>
        )
    }
}

export default AboutUs;
