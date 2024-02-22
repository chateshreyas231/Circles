import { StyleSheet, Image } from 'react-native';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <LottieView source={require("../assets/lottie-files/Animation Logo.json")} 
      autoPlay loop={false} resizeMode='cover' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
  },
});
