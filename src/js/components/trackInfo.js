import React, {Component} from 'react';

import cardData from '../services/cardData'

export default class TrackInfo extends Component {
    state = {
        
    }

    render () {
        const {
            level,
            infoTrackId,
        } = this.props;

        return (
            <div>
                <div className='track-info-group'>
                    <img 
                        src={process.env.PUBLIC_URL + `/image/${cardData[level][infoTrackId-1].name}.jpg`} 
                        alt="плакат" 
                        width={200}
                        height={160}
                        className='questionBlock-image'
                    />
                    <div>
                        <p>{cardData[level][infoTrackId-1].name}</p>
                        <p>{cardData[level][infoTrackId-1].year}</p>
                        <audio controls src={process.env.PUBLIC_URL + `/audio/${cardData[level][infoTrackId-1].name}.mp3`}></audio>
                    </div>
                </div>
                <p>{cardData[level][infoTrackId-1].description}</p>
            </div>
        );
    }
}
