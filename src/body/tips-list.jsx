import React, { Component } from 'react';
import '../css-styles/search-tips-lists.css'


class Tips extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      divider: (<div className="item-list-divider"/>),
      allTipsButton: (
        <div>{this.divider}
          <div onClick={this.AllTips} className="all-tips-button" >All Tips</div>
        </div>),
      unformattedTips: this.props.venueTips[0].items,
      formattedTips: [],
      howManyTips: 6
    }
  }

  componentDidMount () {
    if (this.state.unformattedTips.length < 6) {
      this.setState({howManyTips: this.state.unformattedTips.length}, this.formatTips)
    } else {
      this.formatTips()
    }

  }

  formatTips = () => {
    console.log(this.state)
    let tipList = []
    let divider = this.state.divider

    for (let i = 0; i < this.state.howManyTips; i++) {

      if(i === this.state.unformattedTips.length - 1) {
        divider = "";
      }
      let image = `${this.state.unformattedTips[i].user.photo.prefix}100x100${this.state.unformattedTips[i].user.photo.suffix}`
      console.log(image)
      tipList.push(
        <div key={i}>
            <img className="user-image" src={image} alt="user"/>
            <div className="tip-text user-name">
              {this.state.unformattedTips[i].user.firstName}
              {this.state.unformattedTips[i].user.lastName}
            </div>
            <div className="tip-text">
              {this.state.unformattedTips[i].text}
            </div>
          {divider}
        </div>
      )
    }
    this.setState({formattedTips: tipList})
  }

  AllTips = () => {
    this.setState({howManyTips: this.state.unformattedTips.length, allTipsButton: ""},
      this.formatTips
    )
  }

  render () {

    if( this.state.formattedTips[0] ) {
      return (
        <div className="item-container-list tips-container">
          <h4> Tips </h4>
          <div className="item-list-title-divider"/>
          {this.state.formattedTips}
          {this.state.allTipsButton}
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }
}

export default Tips;


