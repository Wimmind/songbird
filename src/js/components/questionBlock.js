import React, {Component} from 'react';


import cardData from '../services/cardData'
import disk from '../../assets/image/vinil.jpg'
import AudioPlayer from 'react-h5-audio-player';
export default class QuestionBlock extends Component {

  onPauseOtherPlayer = () =>{
      if (this.props.refInfoPlayer.current){
        this.props.refInfoPlayer.current.audio.current.pause();
      }
  }

  render () {
    const {
      level,
      trackGuessed,
      currentTrackId,
      refQuestionPlayer,
    } = this.props;

    return (
      <div className='questionBlock-container'>
        <img 
            src={trackGuessed ? process.env.PUBLIC_URL + `/image/${cardData[level][currentTrackId-1].name}.jpg` : disk} 
            alt="плакат" 
            width={190}
            height={180}
            className='questionBlock-image'
        />
        <div className='player'>
        <h2>{trackGuessed ? cardData[level][currentTrackId-1].name : '******'}</h2>
        <AudioPlayer
          onPlay={this.onPauseOtherPlayer}
          ref={refQuestionPlayer}
          autoPlayAfterSrcChange={false}
          src={process.env.PUBLIC_URL + `/audio/${cardData[level][currentTrackId-1].name}.mp3`}
        />
        </div>
      </div>
    );
  }
}
