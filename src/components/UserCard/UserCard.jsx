/* eslint-disable react/prop-types */
import React from 'react';
import './UserCard.scss';

export const UserCard = ({ users }) => (
  <>
    {users.map(user => (
      <div className="users__user-card user-card" key={user.id}>
        <img
          className="user-card__photo"
          src={user.photo}
          alt="User"
        />
        <p className="user-card__name">
          {user.name}
        </p>
        <p className="user-card__position">
          {user.position}
        </p>
        <p className="user-card__email">
          {user.email}
        </p>
        <p className="user-card__phone">
          {user.phone}
        </p>
      </div>
    ))}
  </>
);
