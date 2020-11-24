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
    Token: 'eyJpdiI6Inkra2JsWTJSbksyMUEyTFFQeVg0RXc9PSIsInZhbHVlIjoiRkNtYkR4eDlUcXhOb0xydTUzMEVlSUlEQlwvODlSenkzWSt1QktBMXp0ZDVOVWVORzhcL1FoMERoSm9hMnBCaVFIS1wvUlwvdG42Mlp6YWxzeVU4dkZjTmF3PT0iLCJtYWMiOiJiNDA3YTljMGY2OGE2Y2RiYWUxYmM2YmM3YjlhNzMxNTI0MTMyODU4ODM5M2MzN2VhMjk3M2NjYTEwNzc2YjM0In0',
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
