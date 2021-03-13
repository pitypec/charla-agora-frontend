import React from 'react';
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import thumbnail from '../../../images/thumbnail.jpg';
import { IconContext } from 'react-icons';

const PostTile = () => {
  return (
    <IconContext.Provider value={{ color: 'grey' }}>
      <div className='tile-wrapper'>
        <div className='tl-col-one'>
          <div className='thumb'>
            <img src={thumbnail} alt='' className='profile-thumbnail' />
            <span>adewumex</span>
          </div>
          <div>
            <BiDotsVerticalRounded size={25} />
          </div>
        </div>
        <img src={thumbnail} alt='newpost' className='post-img' />
        <div className='tl-col-two'>
          <ul>
            <li>
              <Link>
                <AiOutlineHeart size={20} />
              </Link>
            </li>
            <li>
              <Link>
                <FaRegComment size={20} />
              </Link>
            </li>
            <li>
              <Link>
                <FiShare size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default PostTile;
