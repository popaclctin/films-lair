import { SIGNIN_BASE_URL, SIGNUP_BASE_URL } from './config';

export async function login(email: string, password: string) {
  const response = await fetch(SIGNIN_BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message);
  }
  return data;
}

export async function signup(email: string, password: string) {
  const response = await fetch(SIGNUP_BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message);
  }
  return data;
}
