import React, {Component} from 'react';


//<img src={process.env.PUBLIC_URL + `/songbird.png`} className='header-logo' alt="logo" />
export default class Header extends Component {
  state = {
    
  }

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
        <li className='sections'>
            {genres.map((item,i)=>(
                <ul 
                    key={i.toString()+'g'}
                    className={i===level && modalHidden ?'sections-item sections-item_active': 'sections-item' }
                >
                    {item}
                </ul>
            ))}
        </li>
      </div>
    );
  }
}

