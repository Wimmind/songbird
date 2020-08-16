import React, {Component} from 'react';

import cardData from './services/cardData'

import Header from './components/header'
import QuestionBlock from './components/questionBlock'
import AnswerBlock from './components/answerBlock'
import ModalBlock from './components/modalBlock'
import errorAudio from '../assets/audio/error.mp3'
import successAudio from '../assets/audio/success.mp3'

export default class App extends Component {
  state = {
    level: 0,
    currentTrackId: null,
    trackGuessed: false,
    infoTrackId: null,
    score: 0,
    currentScoreLevel: 5,
    currentLevelArray: [],
    modalHidden: true,
    indicatorsColorArray: []
  }

  playerOfQuestionBlock = React.createRef();
  playerOfInfoBlock = React.createRef();

  componentWillMount() {
    const level = this.state.level;
    this.makeQuestionTrack(level);
  }

  makeQuestionTrack = (level) =>{
    this.setState({currentLevelArray: cardData[level]});
    const questionTrackId = Math.floor(Math.random() * cardData[level].length) + 1;
    this.setState({currentTrackId:questionTrackId})
    console.log(`Correct answer: ${cardData[level][questionTrackId-1].name}`)
  }

  checkAnswer = (id) => {
    this.setState({infoTrackId:id})
    let colorArray = this.state.indicatorsColorArray

    if (id === this.state.currentTrackId && !this.state.trackGuessed) {

      this.playClickResult(successAudio)
      colorArray[id-1] = 'success';
      this.setState({trackGuessed:true})
      this.setState({score: this.state.score + this.state.currentScoreLevel})

      this.playerOfQuestionBlock.current.audio.current.pause();

    } else {
      if (this.state.currentScoreLevel>0 && !this.state.trackGuessed && this.checkTrack(id)){
        this.playClickResult(errorAudio)
        this.setState({currentScoreLevel: this.state.currentScoreLevel - 1})
        let currentArray = [...this.state.currentLevelArray];
        currentArray.forEach((item,i)=>{
          if (item.id === id ){
            currentArray.splice(i, 1);
          }
        })
        colorArray[id-1] = 'error';
        this.setState({currentLevelArray: currentArray})
      }
    }
    this.setState({indicatorsColorArray: colorArray})
  }

  playClickResult = (src) => {
    const audio = new Audio();
    audio.src = src;
    audio.play();
  };

  checkTrack = (id) => {
    let result = false;
    this.state.currentLevelArray.forEach((item)=>{
      if (item.id === id ){
        result =  true;
      }
    })
    return result;
  }

  onNextLevel = () => {
    let level;
    if(this.state.level === 5){
      level = 0;
      this.setState({score: 0})
    } else {
      level = this.state.level + 1;
    }
    this.setState({level: level})
    this.setState({trackGuessed: false})
    this.makeQuestionTrack(level);
    this.setState({currentScoreLevel: 5})
    this.setState({infoTrackId: null})
    this.setState({modalHidden: true})
    this.setState({indicatorsColorArray: []})
  }

  showModalBlock = () => {
    this.setState({modalHidden:false})
    this.playerOfQuestionBlock.current.audio.current.pause();
    this.playerOfInfoBlock.current.audio.current.pause();
  }

  render () {
    const {
      level,
      currentTrackId,
      trackGuessed,
      infoTrackId,
      score,
      modalHidden,
      indicatorsColorArray
    } = this.state;

    return (
      <div className='wrapper'>
        <Header level = {level} score={score} modalHidden={modalHidden}/>
        {modalHidden ? 
          <>
          <QuestionBlock
            level = {level}
            currentTrackId = {currentTrackId}
            trackGuessed = {trackGuessed}
            refQuestionPlayer = {this.playerOfQuestionBlock}
            refInfoPlayer = {this.playerOfInfoBlock} />
          <AnswerBlock 
            refQuestionPlayer = {this.playerOfQuestionBlock}
            refInfoPlayer = {this.playerOfInfoBlock}
            trackGuessed = {trackGuessed}
            level = {level}
            onNextLevel = {this.onNextLevel}
            checkAnswer = {this.checkAnswer}
            infoTrackId = {infoTrackId}
            showModalBlock = {this.showModalBlock}
            indicatorsColorArray = {indicatorsColorArray}/>
          </>: 
          <ModalBlock 
            modalHidden={modalHidden} 
            score={score}
            onNextLevel = {this.onNextLevel}/>
        }
      </div>
    );
  }
}



