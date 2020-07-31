import React, {Component} from 'react';

import cardData from './services/cardData'

import Header from './components/header'
import QuestionBlock from './components/questionBlock'
import AnswerBlock from './components/answerBlock'
export default class App extends Component {
  state = {
    level: 0,
    currentTrackId: 1,
    trackGuessed: false,
    infoTrackId: 1,
    startGameLevel : false
  }

  componentDidMount() {
    this.makeQuestionTrack();
  }

  makeQuestionTrack = () =>{
    const questionTrackId = Math.floor(Math.random() * cardData[this.state.level].length) + 1;
    this.setState({currentTrackId:questionTrackId})
  }

  checkAnswer = (id) => {
    this.setState({infoTrackId:id})
    this.setState({startGameLevel : true})
    if (id === this.state.currentTrackId) {
      this.setState({trackGuessed:true})
    }
  }

  onNextLevel = () => {
    if(this.state.level === 5){
      this.setState({level: 0})
    } else {
      this.setState({level: this.state.level += 1})
    }
    this.setState({trackGuessed: false})
    this.setState({startGameLevel : false})
    this.makeQuestionTrack();
  }

  render () {
    const {
      level,
      currentTrackId,
      trackGuessed,
      infoTrackId,
      startGameLevel
    } = this.state;

    return (
      <div className='wrapper'>
        <Header level = {level}/>
        <QuestionBlock
         level = {level}
         currentTrackId = {currentTrackId}
         trackGuessed = {trackGuessed}
         />
        <AnswerBlock 
          level = {level}
          onNextLevel = {this.onNextLevel}
          checkAnswer = {this.checkAnswer}
          infoTrackId = {infoTrackId}
          startGameLevel = {startGameLevel}
        />
      </div>
    );
  }
}


