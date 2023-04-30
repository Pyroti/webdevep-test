import {APP_CONFIG} from '@core/config/app.config';
import axiosConfig from '@core/config/axios.config';
import {
  AuthLogin,
  AuthLoginResponse,
  AuthLogOut,
  AuthLogOutResponse,
  AuthRegistration,
  AuthRegistrationResponse,
  AuthSendCode,
  AuthSendCodeResponse,
} from '@core/interfaces/auth.interface';

export const loginAuth = async (
  data: AuthLogin,
): Promise<AuthLoginResponse> => {
  const response = await axiosConfig.post(
    `${APP_CONFIG.AUTH_API_URL}/login`,
    data,
  );
  return response.data;
};

export const registrationAuth = async (
  data: AuthRegistration,
): Promise<AuthRegistrationResponse> => {
  const response = await axiosConfig.post(
    `${APP_CONFIG.AUTH_API_URL}/register`,
    data,
  );
  return response.data;
};

export const logoutAuth = async (
  data: AuthLogOut,
): Promise<AuthLogOutResponse> => {
  const response = await axiosConfig.post(
    `${APP_CONFIG.AUTH_API_URL}/logout`,
    data,
  );
  return response.data;
};

export const sendCodeEmailAuth = async (
  data: AuthSendCode,
): Promise<AuthSendCodeResponse> => {
  const response = await axiosConfig.post(
    `${APP_CONFIG.AUTH_API_URL}/sendConfirmCode`,
    data,
  );
  return response.data;
};
