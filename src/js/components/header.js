import React, {Component} from 'react';

export default class Header extends Component {
  render () {
    const {level,score,modalHidden} = this.props;

    const genres = ['Classics', 'Hip-hop', 'Pop', 'Rock', 'Eurodance', 'HARDCORE'];

    return (
      <div className='header-container'>
        <div className='header-panel'>
            <h1 className='header-logo'>
              song<span>quiz</span>
            </h1>
            <div className='score'>
                Score: {score}
            </div>
        </div>
        <ul className='sections'>
            {genres.map((item,i)=>(
                <li 
                    key={i.toString()+'g'}
                    className={i===level && modalHidden ?'sections-item sections-item_active': 'sections-item' }
                >
                    {item}
                </li>
            ))}
        </ul>
      </div>
    );
  }
}

