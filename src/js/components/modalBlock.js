import React, {Component} from 'react';

import congratulationImage from '../../assets/image/meloman.jpg'

export default class ModalBlock extends Component {

    render () {
        const {
            score,
            onNextLevel
        } = this.props;

        return (
            <div className='score-block'>
                <h2 className='score-block_title'>Поздравляем!</h2>
                {score === 30 ? <Сongratulation /> : <TryAgainMessage score={score}/>}
                <button onClick={onNextLevel}>
                    Попробовать сыграть еще раз
                </button>
            </div>
        );
    }
}

const TryAgainMessage = ({score}) => {
    return (
        <p>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
    )
}

const Сongratulation = () => {
    return (
        <>
            <p>Вы настоящий меломан!!! Вы набрали максимальное колличество баллов!</p>
            <img src={congratulationImage} alt="winner img" ></img>
        </>
    )
}