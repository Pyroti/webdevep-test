import {getFcmToken, storeFcmToken} from '@core/services/encrypted.service';
import messaging from '@react-native-firebase/messaging';
import {Alert, Platform} from 'react-native';

const getFCMToken = async () => {
  const fcmToken = await getFcmToken();
  if (!fcmToken) {
    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        await storeFcmToken(fcmtoken);
      }
    } catch (error) {
      console.log(error, 'error in fcmToken');
    }
  }
};

export const requestUserPermission = async () => {
  if (Platform.OS === 'ios') {
    await messaging().registerDeviceForRemoteMessages();
  }
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    await getFCMToken();
  }
};

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  await messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().onMessage(remoteMessage => {
    Alert.alert('A new FCM message arrived!', remoteMessage.data?.m);
    console.log('notification on foreground state.....', remoteMessage);
  });
};
