import React from 'react';
import {ToastAndroid, Alert} from 'react-native';

export const showSmallToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  } else {
    Alert.alert(message);
  }
};
