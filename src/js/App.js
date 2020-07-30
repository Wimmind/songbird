import React, {Component} from 'react';

import cardData from './services/cardData'

import Header from './components/header'
import QuestionBlock from './components/questionBlock'
import AnswerBlock from './components/answerBlock'
export default class App extends Component {
  state = {
    level: 0,
    currentTrack: 1
  }

  onNextLevel = () => {
    if(this.state.level === 5){
      this.setState({level: 0})
    } else {
      this.setState({level: this.state.level += 1})
    }
  }

  render () {
    const {level} = this.state;

    return (
      <div className='wrapper'>
        <Header level = {level}/>
        <QuestionBlock level = {level}/>
        <AnswerBlock 
          level = {level}
          onNextLevel = {this.onNextLevel}
        />
      </div>
    );
  }
}


