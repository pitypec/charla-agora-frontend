import React, { useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import PostTile from '../posttile/PostTile';

const Dashboard = () => {
  const history = useHistory();
  const state = useContext(GlobalState);
  const [userInfo, setUserInfo] = state.userApi.userInfo;
  const logout = async () => {
    try {
      await Axios.get('/users/logout');
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='post-wrapper'>
      <div className='col-wrapper'>
        <div className='col-one'>
          <PostTile />
        </div>
        <div className='col-two'>
          <button onClick={logout}>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
