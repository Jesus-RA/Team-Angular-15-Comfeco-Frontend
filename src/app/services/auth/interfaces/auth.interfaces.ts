import { User } from "../../user/interfaces/user.interfaces";

export interface IPayloadRegister {
    nickname: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    message: string;
};

export interface AuthTokens {
    access_token: string;
    refresh_token: string;
}

export interface LoginResponse {
    user: User,
    tokens: AuthTokens;
}
