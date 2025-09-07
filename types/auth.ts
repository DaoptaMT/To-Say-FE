export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar_url?: string;
  bio?: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  token_type: string;
  user: User;
}

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar_url?: string;
  bio?: string;
}

export interface RegisterGoogle {
  id: number,
  email: string,
  name: string,
  avatar_url: string,
}