import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('authStack');
  }, 1500);
  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>React Native Test</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    alignSelf: 'center',
  },
});
