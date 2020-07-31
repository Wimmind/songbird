import React, {Component} from 'react';

import cardData from '../services/cardData'
import TrackInfo from './trackInfo'
export default class AnswerBlock extends Component {
    state = {
        
    }

 
    render () {
        const {
            level,
            onNextLevel,
            checkAnswer,
            infoTrackId,
            startGameLevel
        } = this.props;

        return (
        <div>
            <div className='answerBlock-container'>
                <li className='options answerBlock-item'>
                    {cardData[level].map((item,i)=>(
                        <ul 
                            key={i.toString()+'g'}
                            className='options-item'
                            onClick = {()=>checkAnswer(item.id)}
                        >
                            {item.name}
                        </ul>
                    ))}
                </li>
                <div className='answerBlock-item track-info'>
                    {startGameLevel ? <TrackInfo infoTrackId = {infoTrackId} level = {level}/> : 'Прослушайте запись и отгадайте мелодию'}
                </div>
            </div>
            <button 
                className='nextLevel'
                onClick={onNextLevel}
            >
                Next level
            </button>
        </div>
        );
    }
}
