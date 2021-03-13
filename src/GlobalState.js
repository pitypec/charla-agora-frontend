import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';
import userApi from './api/UserApi';

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    const refreshToken = async () => {
      try {
        const res = await Axios.get('/users/refresh_token');
        setToken(res.data.accesstoken);
      } catch (error) {
        console.log(error);
      }
    };
    if (firstLogin) refreshToken();
  }, [token]);

  const state = {
    token: [token, setToken],
    userApi: userApi(token)
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
