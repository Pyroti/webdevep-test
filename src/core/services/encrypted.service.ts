import EncryptedStorage from 'react-native-encrypted-storage';
import {StorageKeys} from '@core/constants/storage-keys.constant';
import {JwtToken} from '@core/interfaces/auth.interface';
import jwt_decode from 'jwt-decode';

// refresh
export const storeRefreshToken = async (token: string): Promise<void> => {
  await EncryptedStorage.setItem(StorageKeys.refreshToken, token);
};

export const getRefreshToken = async (): Promise<string | null> => {
  return await EncryptedStorage.getItem(StorageKeys.refreshToken);
};

export const removeRefreshToken = async (): Promise<void> => {
  await EncryptedStorage.removeItem(StorageKeys.refreshToken);
};

//access
export const storeAccessToken = async (token: string): Promise<void> => {
  await EncryptedStorage.setItem(StorageKeys.accessToken, token);
};

export const getAccessToken = async (): Promise<string | null> => {
  return await EncryptedStorage.getItem(StorageKeys.accessToken);
};

export const removeAccessToken = async (): Promise<void> => {
  await EncryptedStorage.removeItem(StorageKeys.accessToken);
};

//fcm
export const storeFcmToken = async (token: string): Promise<void> => {
  await EncryptedStorage.setItem(StorageKeys.fcmToken, token);
};

export const getFcmToken = async (): Promise<string | null> => {
  return await EncryptedStorage.getItem(StorageKeys.fcmToken);
};

// jwt
export const getDecodeJwt = async (): Promise<JwtToken | null> => {
  const jwt = (await getAccessToken()) as string;
  const decodeJwt = jwt_decode(jwt) as JwtToken;
  return decodeJwt;
};
