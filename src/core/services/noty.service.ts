import {APP_CONFIG} from '@core/config/app.config';
import axiosConfig from '@core/config/axios.config';
import {
  NotyShortMessage,
  NotyFirebaseToken,
  NotyShortMessageResponse,
  NotyFirebaseTokenResponse,
} from '@core/interfaces/noty.interface';

export const sendMessageNoty = async (
  data: NotyShortMessage,
): Promise<NotyShortMessageResponse> => {
  const response = await axiosConfig.post(
    `${APP_CONFIG.NOTY_API_URL}/private/sendShortMessage`,
    data,
  );
  return response.data;
};

export const regFirebaseTokenNoty = async (
  data: NotyFirebaseToken,
): Promise<NotyFirebaseTokenResponse> => {
  const response = await axiosConfig.post(
    `${APP_CONFIG.NOTY_API_URL}/v1/firebaseToken`,
    data,
  );
  return response.data;
};
