import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Login extends Component {

  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <Text style={styles.header}>Welcome !</Text>
            <TextInput style={[styles.userdata]} keyboardType={"email-address"}
              placeholder="Email id" returnKeyType={"next"}></TextInput>

            <TextInput style={[styles.userdata]} placeholder="Password"
              secureTextEntry={true} returnKeyType={"go"}></TextInput>

            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => Actions.login()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>Don't have an account ?
          <Text style={{ fontWeight: 'bold' }} onPress={() => Actions.signup()}> Signup</Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'serif',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c7080',
  },
  userdata: {
    color: 'grey',
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 20,
    fontSize: 20,
    marginBottom: 15,
    padding: 10,
    paddingBottom: 10,
    width: 330,
    fontFamily: 'sans-serif-condensed',
    letterSpacing: 3,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginTop: 10
  },
  loginButton: {
    backgroundColor: "#ffe6b8",
    borderColor: '#ffe6b8',
    borderWidth: 1,
  },
  buttonText: {
    color: '#5c7080',
  },
  footer: {
    alignItems: 'flex-end',
    color: '#ffffff',
    fontSize: 15,
    letterSpacing: 1
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
})
