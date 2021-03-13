import React, { useState } from 'react';
import Axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('/users/forgot', { email });
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className='fgt-wrapper'>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='login-label'>
            <label htmlFor='email'>Email</label>
          </div>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            placeholder='Please enter your email'
            onChange={handleChange}
            required
          />
        </div>
        <div className='fgt-button'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
