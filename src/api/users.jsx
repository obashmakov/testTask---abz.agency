import { request } from './helpers';

export const getUsers = async(page) => {
  const users = await request(`/users?page=${page}`);

  return users;
};
