import React, {Component} from 'react';

import cardData from './services/cardData'

import './App.css';

export default class App extends Component {
  state = {
    level: 0
  }
  say = () => {
    const audio = new Audio(process.env.PUBLIC_URL + `/audio/${cardData[0][0].name}.mp3`);
    audio.play();
  }


  render () {
    return (
      <div>
        <button onClick={this.say}>fsdfsfsf</button>
        <img src={process.env.PUBLIC_URL + `/image/${cardData[0][0].name}.jpg`} alt="logo" />

      </div>
    );
  }
}


