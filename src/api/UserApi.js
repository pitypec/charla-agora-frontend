import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const UserApi = (token) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const getUserInfo = async () => {
        try {
          const res = await Axios.get('/users/userinfo', {
            headers: { Authorization: token }
          });
          setIsLogged(true);
          setUserInfo(res.data);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (error) {
          console.log(error);
        }
      };
      getUserInfo();
    }
  }, [token, isLogged]);
  return {
    isLogged: [isLogged, setIsLogged],
    userInfo: [userInfo, setUserInfo],
    isAdmin: [isAdmin, setIsAdmin]
  };
};

export default UserApi;
