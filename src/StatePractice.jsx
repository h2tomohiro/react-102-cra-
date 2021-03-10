import React, { Component } from 'react';

class StatePractice extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      imageWidth: ''
    }
  }

  onFocus = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  onMouseEnter = () => {
    this.setState({
      message: ''
    })
  }

  handleImageLoaded = (e) => {
    const elm = document.getElementById("foo");
    if (elm.naturalWidth > 100) {
       console.log("Your image is big!")
      }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="text" onFocus={this.onFocus} />
          <h3 onMouseEnter={this.onMouseEnter}>{this.state.message}</h3>
          <img
            id="foo"
            src='https://cdn.myanimelist.net//images//manga//5//84777.jpg'
            onLoad={this.handleImageLoaded}
            alt="Touch" />
        </form>
      </div >
    );
  }
}

export default StatePractice;
