import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Sign up with:', { name, dateOfBirth, email, phone, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Replace with your logo component or image */}
        <Text style={styles.logoText}>CIRCLES</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
          <TextInput
          style={styles.input}
          placeholder="Phone number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    // Add your styling for the logo container
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    // Add your styling for the logo text
  },
  formContainer: {
    width: '80%',
    // Add your styling for the form container
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    // Add your styling for the input fields
  },
  signUpButton: {
    backgroundColor: '#0000ff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    // Add your styling for the sign-up button
  },
  signUpButtonText: {
    color: '#fff',
    // Add your styling for the sign-up button text
  },
});

export default SignupScreen;
