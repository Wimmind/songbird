import React, {Component} from 'react';

import cardData from '../services/cardData'

export default class QuestionBlock extends Component {
  state = {
    
  }



  render () {
    const {level} = this.props;

    return (
      <div className='questionBlock-container'>
        <img 
            src={process.env.PUBLIC_URL + `/image/${cardData[level][0].name}.jpg`} 
            alt="плакат" 
            width={200}
            height={160}
            className='questionBlock-image'
        />
        <div className='player'>
            <h2>******</h2>
            <audio controls src={process.env.PUBLIC_URL + `/audio/${cardData[level][0].name}.mp3`}></audio>
        </div>
      </div>
    );
  }
}
