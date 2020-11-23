import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';

export const UserCard = ({ users }) => {
  const [inHover, setHover] = useState(false);

  return (
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
          <p
            className="user-card__email"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {user.email}
            {inHover && (
              <span className="user-card__email--hovered">{user.email}</span>
            )}
          </p>
          <p className="user-card__phone">
            {user.phone}
          </p>
        </div>
      ))}
    </>
  );
};

UserCard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })).isRequired,
};
