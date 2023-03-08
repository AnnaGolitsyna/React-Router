import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../gateway/gateway.js';

const User = ({
  match: {
    params: { userId },
  },
}) => {
  const [user, setUser] = useState({
    name: '',
    location: '',
    avatar_url: '',
  });

  useEffect(() => {
    fetchUserData(userId).then(({ name, location, avatar_url }) =>
      setUser((prevState) => ({ ...prevState, name, location, avatar_url }))
    );
  }, [userId]);

  const { name, location, avatar_url } = user;

  if (!name || !location || !avatar_url) {
    return null;
  }

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
