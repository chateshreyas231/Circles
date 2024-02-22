import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>CIRCLES</Text>
      <TextInput
        placeholder="Email address or phone number"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.socialLogin}>
        {/* Here you can include the Google logo */}
        <Text style={styles.socialLoginText}>Sign in using Google</Text>
      </TouchableOpacity>

      <Text style={styles.signUp}>
        Not a member yet? <Text style={styles.signUpText}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
  },
  socialLogin: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  socialLoginText: {
    color: '#757575',
    fontWeight: 'bold',
  },
  signUp: {
    marginTop: 20,
  },
  signUpText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;