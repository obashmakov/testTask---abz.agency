import React from 'react';
import './UserCard.scss';

export const UserCard = () => (
  <div className="users__user-card user-card">
    <img
      className="user-card__photo"
      src="/images/photo-cover.svg"
      alt="User"
    />
    <p className="user-card__name">
      Adolph Blaine Charles David Earl Matthew Matthew
    </p>
    <p className="user-card__position">
      Contextual advertising specialist
    </p>
    <p className="user-card__email">
      adolph.blainecharles@...
    </p>
    <p className="user-card__phone">
      +380 50 678 03 24
    </p>
  </div>
);
