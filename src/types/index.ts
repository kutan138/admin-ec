export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}
