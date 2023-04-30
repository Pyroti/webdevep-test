import React, {useCallback} from 'react';
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {AuthButton} from '@core/components/auth-button/auth-button.component';
import {logoutAction} from '@store/actions/auth';
import {getRefreshToken, getUidToken} from '@core/services/encrypted.service';
import {sendMessageAction} from '@store/actions/noty';

import * as Styles from './home.styles';

const ANDROID = 'android';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const sendMessage = useCallback(async () => {
    const uid = await getUidToken();
    const message = {
      backend: 'firebase',
      message: 'hello',
      recipient: uid!,
      subject: 'Test notification',
    };
    dispatch(sendMessageAction.request(message));
  }, [dispatch]);

  const logOut = useCallback(async () => {
    const refreshToken = await getRefreshToken();
    if (refreshToken !== null) {
      dispatch(logoutAction.request({refreshToken}));
    }
  }, [dispatch]);

  const isAndroid = Platform.OS === ANDROID;

  return (
    <Styles.SafeContainer>
      {isAndroid && (
        <AuthButton title={t('home.notification')} onPress={sendMessage} />
      )}
      <Styles.Text>{t('home.title')}</Styles.Text>
      <AuthButton title={t('home.logout')} onPress={logOut} />
    </Styles.SafeContainer>
  );
};

export default Home;
