import axios from 'axios';

export interface LoginPayload {
  email: string;
  password: string;
}


export interface LoginResponse {
  message: string;
  token: string;
}


export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  token: string;
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>(
    'http://localhost:8080/api/user/login',
    payload,
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response.data;
}

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  const response = await axios.post<RegisterResponse>(
    'http://localhost:8080/api/user/register',
    payload,
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response.data;
}