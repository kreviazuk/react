import api from './client';

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams extends LoginParams {
  name?: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface UserResponse {
  id: number;
  email: string;
  name?: string;
}

export const login = async (data: LoginParams): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/login', data);
  return response.data;
};

export const register = async (data: RegisterParams): Promise<UserResponse> => {
  const response = await api.post<UserResponse>('/register', data);
  return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
    // Implement any other logout logic
};

export const checkHealth = async () => {
   const response = await api.get('/health');
   return response.data;
}
