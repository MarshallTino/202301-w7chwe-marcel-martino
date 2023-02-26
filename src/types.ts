import { JwtPayload } from "jwt-decode";

export interface User {
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
  id: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
}
