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
            trackGuessed,
            showModalBlock,
            indicatorsColorArray,
            refQuestionPlayer,
            refInfoPlayer
        } = this.props;

        const buttonFunc = level === 5 ? showModalBlock : onNextLevel;

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
                            <span className={indicatorsColorArray[i] ? `answer-indicator ${indicatorsColorArray[i]}` : 'answer-indicator' }></span>
                            {item.name}
                        </ul>
                    ))}
                </li>
                <div className='answerBlock-item track-info'>
                    {
                    infoTrackId ? 
                        <TrackInfo 
                            refInfoPlayer = {refInfoPlayer} 
                            refQuestionPlayer={refQuestionPlayer} 
                            infoTrackId = {infoTrackId} 
                            level = {level}
                        /> : 'Прослушайте запись и отгадайте мелодию'}
                </div>
            </div>
            <button 
                className={trackGuessed ? 'next-level next-level_active' : 'next-level'}
                onClick={trackGuessed ? buttonFunc : null}
            >
                Next level
            </button>
        </div>
        );
    }
}
