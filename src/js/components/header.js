import React, {Component} from 'react';


//<img src={process.env.PUBLIC_URL + `/image/${cardData[0][0].name}.jpg`} alt="logo" />
export default class Header extends Component {
  state = {
    
  }

  render () {
    const genres = ['Классика', 'Хип-хоп', 'Поп', 'Рок', 'Евроденс', 'ХАРДКОР'];

    return (
      <div className='header-container'>
        <div className='header-panel'>
            <img src={process.env.PUBLIC_URL + `/songbird.png`} className='header-logo' alt="logo" />
            <div className='score'>
                Score: 0
            </div>
        </div>
        <li className='sections'>
            {genres.map((item,i)=>(
                <ul 
                    key={i.toString()+'g'}
                    className='sections-item'
                >
                    {item}
                </ul>
            ))}
        </li>
      </div>
    );
  }
}

