export interface NotyShortMessage {
  backend: string;
  message: string;
  recipient: string;
  subject: string;
}

export interface NotyShortMessageResponse {
  ok: string;
}

export interface NotyFirebaseToken {
  token: string;
  uid: string;
}

export interface NotyFirebaseTokenResponse {
  ok: string;
}
