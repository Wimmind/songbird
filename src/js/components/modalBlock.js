import React, {Component} from 'react';

import congratulationImage from '../../assets/image/meloman.jpg'

export default class ModalBlock extends Component {
    state = {
        
    }

 
    render () {
        const {
            score,
            modalHidden,
            onNextLevel
        } = this.props;

       let modalBlock = 'score-block';
        //let fadeBlock = 'fade-block';


        return (
        
            <div className={modalBlock}>
                <p>Score: {score}/30</p>
                {score === 30 ? <Сongratulation/> : <TryAgainMessage/>}
                <button onClick={onNextLevel}>
                    Try again
                </button>
            </div>
        
        );
    }
}

const TryAgainMessage = () => {
    return (
        <>
            <p>Попробуйте сыграть еще раз</p>
        </>
    )
}

const Сongratulation = () => {
    return (
        <>
            <p>Ураа вы настоящий меломан!!!</p>
            <img src={congratulationImage}></img>
        </>
    )
}