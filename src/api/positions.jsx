import { request } from './helpers';

export const getPositions = async() => {
  const positions = await request('/positions');

  return positions;
};
