import React, { useState } from 'react';
import Axios from 'axios';
import loginAuth from '../../../images/login-auth.svg';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmpassword: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const res = await Axios.post('/users/signup', { ...user });
      localStorage.setItem('firstLogin', true);
      console.log(res);
    } catch (error) {
      if (error) alert(error.response.data.msg);
    }
    setUser({});
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
        <div>
          <div className='login-label'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
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
        <div className='login-submit'>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
