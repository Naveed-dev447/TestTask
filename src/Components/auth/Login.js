import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, FormControl, Input, Link, Button, HStack } from "native-base";
import { signIn } from "./authAction";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { showSmallToast } from "../Toast/Toast";

const Login = ({ ...props }) => {
  const registeredData = useSelector((state) => state?.registerReducer?.registerData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('Saved Data', registeredData)
  const handleLoginData = () => {
    if (email && password) {
      if (registeredData) {
        if (email == registeredData.email) {
          if (password == registeredData.password) {
            props.navigation.navigate('carStack');
            showSmallToast('Congratulation, You Scuccessfully loggedIn !')
          }
          else {
            showSmallToast('Password is Incorrect!');
          }
        } else {
          showSmallToast('Email is Incorrect!');
        }
      }
      else {
        showSmallToast("Account does'nt exist !")
      }
    }
    else {
      showSmallToast('Enter the Values');
    }
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginPageHandler}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.signInContinueText}>Sign in to continue!</Text>
        <View style={{ marginTop: '4%' }}>
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              value={email}
              autoCapitalize="none"
              onChangeText={(value) => setEmail(value)}
              placeholder="Enter Email" style={styles.inputStyle}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password}
              onChangeText={(value) => setPassword(value)} placeholder="Password" style={styles.inputStyle} />
          </FormControl>
          <Button mt="10" colorScheme="indigo" onPress={handleLoginData}>
            Sign in
          </Button>
          <View style={styles.newUserCreation}>
            <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#" onPress={() => props.navigation.navigate('registerStack')}>
              Sign Up
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ signIn }, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const window = Dimensions.get("window");
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loginPageHandler: {
    marginTop: '30%',
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
  newUserCreation: {
    marginTop: '10%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 14,
    marginLeft: '3%'
  }
})
