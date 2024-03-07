import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
// import { SafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
    <Tabs
      screenOptions={{headerShown: false
      }}>
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({}) => <Icon name="dynamic-feed" size={30}/>,
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({}) => <Icon name="search" size={30}/>,
        }}
      />
            <Tabs.Screen
        name="Create"
        options={{
          tabBarIcon: ({}) => <Icon name="add-box" size={30}/>,
        }}
      />
            <Tabs.Screen
        name="Circles"
        options={{
          tabBarIcon: ({}) => <Icon name="play-arrow" size={30}/>,
        }}
      />
            <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({}) => <Icon name="account-circle" size={30}/>,
        }}
      />
      
    </Tabs>
    
    </SafeAreaView>
  );
}


