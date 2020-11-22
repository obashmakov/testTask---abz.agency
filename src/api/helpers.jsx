const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export async function request(url, options) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  const result = await response.json();

  return result;
}

// const getToken = async() => {
//   const token = await request('/token');

//   return token;
// };

const post = (url, data) => request(url, {
  method: 'POST',
  headers: {
    // eslint-disable-next-line max-len
    Token: 'eyJpdiI6IitLK3d4WEFKODl1ZzlYbFRCRmVWNkE9PSIsInZhbHVlIjoiZ2JVSTkrYjdpYTdhaStyenpJaVl3YklPY2ZWMlo0QkxrZW5tTVdqbXhVXC9GZGFJcFRIdGdzQW1heU5RZ2F0QXo5YnMxeEIwTlZ4aERuYnJYRE5nSGVnPT0iLCJtYWMiOiJhOGQ4ZWY2MzZkOTY0ZWY1YTYzZmM3NTM4YjA5ZjEyNjk2YjA1NmEwZWE4N2E5MzM5OGFmOGY5N2ZjM2EyNGQwIn0',
  },
  body: JSON.stringify(data),
});

// eslint-disable-next-line camelcase
export const createUser = async(name, email, phone, position_id, photo) => post(
  '/users', {
    name,
    email,
    phone,
    position_id,
    photo,
  },
);
