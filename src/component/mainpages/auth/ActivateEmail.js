import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const ActivateEmail = () => {
  const { token } = useParams();
  const [msg, setMsg] = useState('');
  console.log(token);

  useEffect(() => {
    if (!token) return alert('please activate your email');
    const activateEmail = async () => {
      try {
        const res = await Axios.post('/users/activate', { token });
        setMsg(res.data.msg);
      } catch (error) {
        alert(error);
      }
    };
    activateEmail();
  }, [token]);
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
};

export default ActivateEmail;
