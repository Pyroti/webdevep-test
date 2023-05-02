import jwt_decode from 'jwt-decode';
import axiosConfig from './axios.config';
import {
  getAccessToken,
  getRefreshToken,
  storeRefreshToken,
  storeAccessToken,
  removeRefreshToken,
  removeAccessToken,
} from '@core/services/encrypted.service';
import {JwtToken} from '@core/interfaces/auth.interface';
import * as AuthService from '@core/services/auth.service';
import {replaceNavigationToUnauthorizedState} from '@navigators/root.navigator';

const oneSecond = 1000;
const timeToSafeRefresh = 20000;

axiosConfig.interceptors.request.use(
  async res => {
    const token = await getAccessToken();
    const decodeJwt = token && ((await jwt_decode(token)) as JwtToken);
    const refreshToken = await getRefreshToken();

    if (decodeJwt && refreshToken) {
      const tokenExp = decodeJwt.exp! * oneSecond - timeToSafeRefresh;
      const dateNow = new Date().getTime();

      if (tokenExp <= dateNow) {
        try {
          const data = await AuthService.regenerateTokenAuth({refreshToken});
          await storeRefreshToken(data.refreshToken);
          await storeAccessToken(data.accessToken);
          res.params = {apiToken: data.accessToken};
          axiosConfig.defaults.params = {apiToken: data.accessToken};
        } catch {
          await removeRefreshToken();
          await removeAccessToken();
          axiosConfig.defaults.params = undefined;
          replaceNavigationToUnauthorizedState();
        }
      }
    }
    return res;
  },
  async err => {
    return Promise.reject(err);
  },
);
