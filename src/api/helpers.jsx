const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export async function request(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const result = await response.json();

  return result;
}
