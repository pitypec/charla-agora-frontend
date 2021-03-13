import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [user, setUser] = useState({
    password: '',
    confirmpassword: ''
  });
  const history = useHistory();
  const { reset_token } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(
        '/users/reset',
        { ...user },
        {
          headers: { Authorization: reset_token }
        }
      );
      alert(res.data.msg);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <div className='reset-form'>
        <form onSubmit={handleSubmit}>
          <div>
            <div className='login-label'>
              <label htmlFor='password'>Password</label>
            </div>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className='login-label'>
              <label htmlFor='email'>Confirm Password</label>
            </div>
            <input
              type='password'
              id='confirmpassword'
              name='confirmpassword'
              placeholder='Password'
              value={user.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <div className='reset-button'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
