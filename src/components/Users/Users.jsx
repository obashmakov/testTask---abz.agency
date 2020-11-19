import React from 'react';
import { UserCard } from '../UserCard';
import './Users.scss';

export const Users = () => (
  <section className="users">
    <div className="users__container">
      <h1 className="users__title">
        Our cheerful users
      </h1>
      <p className="users__details">
        Attention! Sorting users by registration date
      </p>
      <div className="users__cards">
        <UserCard />
      </div>
    </div>
  </section>
);
