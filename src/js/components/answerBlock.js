import React, {Component} from 'react';

import cardData from '../services/cardData'

export default class AnswerBlock extends Component {
    state = {
        
    }

 
    render () {
        const {
            level,
            onNextLevel
        } = this.props;

        return (
        <div>
            <div className='answerBlock-container'>
                <li className='options answerBlock-item'>
                    {cardData[level].map((item,i)=>(
                        <ul 
                            key={i.toString()+'g'}
                            className='options-item'
                        >
                            {item.name}
                        </ul>
                    ))}
                </li>
                <div className='answerBlock-item'>

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
