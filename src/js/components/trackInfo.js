import React, {Component} from 'react';

import AudioPlayer from 'react-h5-audio-player';
import cardData from '../services/cardData'

export default class TrackInfo extends Component {

    onPauseOtherPlayer = () =>{
        this.props.refQuestionPlayer.current.audio.current.pause();
    }

    render () {
        const {
            level,
            infoTrackId,
            refInfoPlayer,
        } = this.props;

        return (
            <div>
                <div className='track-info-group'>
                    <img 
                        src={process.env.PUBLIC_URL + `/image/${cardData[level][infoTrackId-1].name}.jpg`} 
                        alt="плакат" 
                        width={200}
                        height={180}
                        className='track-info-group_image'
                    />
                    <div className='track-info-group-titles'>
                        <p className='track-info-group_name'>{cardData[level][infoTrackId-1].name}</p>
                        <p className='track-info-group_year'>год: {cardData[level][infoTrackId-1].year}</p>
                    </div>
                </div>
                <AudioPlayer
                    onPlay={this.onPauseOtherPlayer}
                    ref = {refInfoPlayer}
                    autoPlayAfterSrcChange = {false}
                    src={process.env.PUBLIC_URL + `/audio/${cardData[level][infoTrackId-1].name}.mp3`}
                />
                <p className='track-info-description'>{cardData[level][infoTrackId-1].description}</p>
            </div>
        );
    }
}
