import EncryptedStorage from 'react-native-encrypted-storage';
import {StorageKeys} from '@core/constants/storage-keys.constant';

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

// uid
export const storeUidToken = async (uid: string): Promise<void> => {
  await EncryptedStorage.setItem(StorageKeys.uid, uid);
};

export const getUidToken = async (): Promise<string | null> => {
  return await EncryptedStorage.getItem(StorageKeys.uid);
};
