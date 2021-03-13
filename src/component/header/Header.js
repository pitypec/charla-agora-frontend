import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import { AiOutlineHome } from 'react-icons/ai';
import { MdNotificationsNone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import thumbnail from '../../images/thumbnail.jpg';
import { IconContext } from 'react-icons';

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;

  const subMenu = () => {
    <ul className='sub-menu'>
      <li>
        <Link>settings</Link>
      </li>
    </ul>;
  };
  const handleClick = () => {};
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        {isLogged ? (
          <header className='main-header'>
            <div className='main-header-wrapper'>
              <div className='logo'>
                <Link to='/dashboard'>btssocial</Link>
              </div>
              <div className='search-input'>
                <input type='text' name='search' placeholder='search' />
              </div>

              <ul className='header-menu'>
                <li>
                  <Link>
                    <AiOutlineHome size={25} />
                  </Link>
                </li>
                <li>
                  <Link>
                    <MdNotificationsNone size={25} />
                  </Link>
                  <span className='notification-thumb'>3</span>
                </li>
                <li onClick={handleClick}>
                  <div className='settings'>
                    <span className='user-name'>Adewumi Emmanuel Femi</span>
                    <img
                      src={thumbnail}
                      alt='thumnail'
                      className='profile-thumbnail'
                    />
                  </div>
                  {subMenu}
                </li>
              </ul>
            </div>
          </header>
        ) : (
          <header class='sub-header'>
            <div class='sub-wrapper'>
              <h2 class='sub-text'>btssocial</h2>
            </div>
          </header>
        )}
      </IconContext.Provider>
    </>
  );
}

export default Header;
