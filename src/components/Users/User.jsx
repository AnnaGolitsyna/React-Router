import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../../gateway/user.js';
import './user.scss';

const User = () => {
  const { userId } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData(userId).then(data => {
      setUserData(data);
    });
  }, [userId]);

  if (!userData) {
    return null;
  }
  const { name, location, avatar_url } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
