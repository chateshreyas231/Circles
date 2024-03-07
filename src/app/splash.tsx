import { StyleSheet, Image, Text } from 'react-native';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { Dispatch, SetStateAction } from 'react';

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Splash({setIsLoading}:SplashProps): JSX.Element {
  return (
    <View style={styles.container}>
      <LottieView source={require("../assets/lottie-files/Animation-Logo2.json")} 
      autoPlay loop={false} resizeMode='cover' style={styles.logo}
      onAnimationFinish={()=> setIsLoading(false)}></LottieView>
      <Animatable.Text animation="fadeIn" easing="ease-out" style={styles.name}>CIRCLES</Animatable.Text>
    </View> 
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  logo:{
    marginTop: '15%',
    width: '90%',
  },
  name:{
    marginTop: '20%',
    padding: 30,
 // Adds space between the animation and the text
    fontSize: 25, // Adjust the font size as needed
    textAlign: 'center', 
  }
});
