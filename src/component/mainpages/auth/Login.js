import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import loginAuth from '../../../images/login-auth.svg';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('/users/signin', { ...user });
      setUser({
        email: '',
        password: ''
      });
      localStorage.setItem('firstLogin', true);
      history.push('/dashboard');
      alert(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='login-form-wrapper'>
      <div class='auth-img'>
        <div class='auth-img-wrapper'>
          <img src={loginAuth} alt='auth' />
        </div>
      </div>
      <form onSubmit={handleSubmit} className='login-form'>
        <div>
          <div className='login-label'>
            <label htmlFor='email'>Email</label>
          </div>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
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
        <Link to='/forgot_password'>forgot password?</Link>
        <div className='login-submit'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
