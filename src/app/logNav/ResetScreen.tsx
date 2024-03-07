import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

const ResetPasswordScreen = ({}) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (!password || password.length < 14) {
      Alert.alert('Error', 'Password must be at least 14 characters long');
      return;
    }
    // Add additional validation for uppercase, lowercase, digit and symbol

    // Handle the password reset logic here
    Alert.alert('Success', 'Password has been reset');
  };
return (
  <View style={styles.container}>
    <Text style={styles.title}>Reset Password</Text>
    <Text style={styles.instructions}>
      Enter a new password with at least 14 characters with uppercase, lowercase, digit and symbol.
    </Text>
    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="New Password"
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      placeholder="Confirm Password"
      secureTextEntry
    /> 
    <Button title="Reset" onPress={handleResetPassword} />
  </View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius:10,
    borderColor: 'gray',
    padding: 10,
  },
});

export default ResetPasswordScreen;
