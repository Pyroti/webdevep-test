export interface AuthRegistration {
  email: string;
  password: string;
  emailConfirmCode: string;
  userInfo: {
    name: string;
  };
}

export interface AuthRegistrationResponse {
  ok: boolean;
  uid: string;
}

export interface AuthLogin {
  credential: string;
  password: string;
  code: string;
}

export interface AuthLoginResponse {
  ok: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface AuthLogOut {
  refreshToken: string;
}

export interface AuthLogOutResponse {
  ok: boolean;
}

export interface AuthSendCode {
  email: string;
}

export interface AuthSendCodeResponse {
  ok: boolean;
}

export interface AuthRegenerateToken {
  refreshToken: string;
}

export interface AuthRegenerateTokenResponse {
  ok: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface JwtToken {
  sub: string;
  exp: number;
  roles: string[];
}

export interface AuthPublicKeyResponse {
  kty: string;
  n: string;
  e: string;
}
