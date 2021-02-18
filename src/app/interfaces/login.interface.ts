export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  tokens: IToken;
}

export interface IUser {
  _id: string;
  nickname: string;
  email: string;
  created_at: number;
  updated_at: number;
  verified_email: boolean;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
}
