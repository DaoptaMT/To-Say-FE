export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  avata_url?: string;
  bio?: string;
}

export interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  avata_url?: string;
  bio?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
