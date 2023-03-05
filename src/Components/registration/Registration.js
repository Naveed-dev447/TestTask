import React, {useState} from 'react';
import {
  FormControl,
  Input,
  Button,
  Text
} from 'native-base';
import { View, StyleSheet, Dimensions } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerData} from './regiserAction';
import {showSmallToast} from '../Toast/Toast';

const Registration = ({...props}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dataHandling = () => {
    if (password && email) {
      if (password === confirmPassword) {
        props.registerData(email, password);
      } else {
        showSmallToast("Password & confirm Password must be same !");
      }
    } else {
      showSmallToast('Enter the Values');
    }
  };
  return (
    <View style={styles.mainContainer}>
    <View style={styles.loginPageHandler}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.signInContinueText}>Sign in to continue!</Text>
      <View style={{ marginTop: '4%' }}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={email}
              onChangeText={value => setEmail(value)}
              style={styles.inputStyle}
              placeholder="Enter Email"
            />
          </FormControl>
          <FormControl mt={3}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={value => setPassword(value)}
              placeholder="Password"
              style={styles.inputStyle}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              value={confirmPassword}
              onChangeText={value => setConfirmPassword(value)}
              placeholder="Confirm Password"
              style={styles.inputStyle}
            />
          </FormControl>
          <Button mt="10" colorScheme="indigo" onPress={dataHandling}>
            Sign up
          </Button>
          </View>
        </View>
      </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({registerData}, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loginPageHandler: {
    marginTop: '20%',
    margin: '10%'
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: 22
  },
  signInContinueText: {
    fontWeight: '500',
    color: '#454545',
    marginTop: '1%'
  },
  inputStyle:{ 
    fontSize: 14 ,
    marginLeft:'3%'
  }
})