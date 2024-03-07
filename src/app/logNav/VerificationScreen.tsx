
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing, TouchableWithoutFeedback, Keyboard } from 'react-native';

const VerificationScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  
  const emailOrPhoneInputRef = useRef(null);
  const translateY = useRef(new Animated.Value(1000)).current; // Start off screen

  const sendVerification = () => {
    // Logic to send verification code
    setVerificationSent(true);
    // Disable the email/phone input
    setEmailOrPhone(emailOrPhone.trim()); // Trim and set the final phone/email
    // Animate the verification input
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
    Keyboard.dismiss(); // Dismiss the keyboard when sending the verification code
  };

  const resetVerification = () => {
    // Logic to allow the user to edit the email or phone
    setVerificationSent(false);
    // Animate the verification input away
    Animated.timing(translateY, {
      toValue: 1000,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  // Function to dismiss the keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Verification</Text>
          <TextInput
            ref={emailOrPhoneInputRef}
            style={styles.input}
            onChangeText={setEmailOrPhone}
            value={emailOrPhone}
            placeholder="Email address or Phone number"
            keyboardType="email-address"
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.button} onPress={sendVerification} disabled={verificationSent}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            styles.verifyContainer, 
            { transform: [{ translateY }] }
          ]}
        >
          <View style={styles.horizontalLine} />
          <TextInput
            style={styles.input}
            onChangeText={setVerificationCode}
            value={verificationCode}
            placeholder="Verification code"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetVerification}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  verifyContainer: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    alignItems: 'center', // Center the items in the verifyContainer
  },
  horizontalLine: {
    alignSelf: 'center',
    width: 50,
    height: 4,
    backgroundColor: 'grey',
    borderRadius: 2,
    marginVertical: 10,
  },
  backButton: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
});

export default VerificationScreen;
