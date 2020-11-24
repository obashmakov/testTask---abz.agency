import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/users';
import { UserCard } from '../UserCard';
import './Users.scss';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loadedUsersError, setLoadedUsersError] = useState(true);

  useEffect(() => {
    getUsers(page)
      .then((info) => {
        if (!info.users) {
          setLoadedUsersError(false);
        } else {
          setUsers([...users, ...info.users]);
        }
      });
  }, [setUsers, page]);

  const showOtherUsers = () => {
    setPage(page + 1);
  };

  return (
    <section className="users" id="users">
      <div className="users__container">
        <h1 className="users__title">
          Our cheerful users
        </h1>
        <p className="users__details">
          Attention! Sorting users by registration date
        </p>
        <div className="users__cards">
          {users && (
            <UserCard users={users} />
          )}
        </div>
        <div className="users__button-container">
          {!loadedUsersError && (
            <p className="users__error">
              All users are loaded
            </p>
          )}
          <button
            className="users__button"
            type="button"
            onClick={showOtherUsers}
            disabled={!loadedUsersError}
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};
