import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const FeedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Feed</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.feedContainer}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image style={styles.avatar} source={{ uri: 'path_to_avatar' }} />
            <View style={styles.postInfo}>
              <Text style={styles.userName}>Jane Doe</Text>
              <Text style={styles.userLocation}>Location</Text>
            </View>
          </View>

          <View style={styles.postContent}>
            <Text style={styles.postText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>

          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.icon}>
              <Text>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Text>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Text>➡️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Text>🔇</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* items in the feed */}
      </ScrollView>

      <View style={styles.bottomNavigation}>
        {/*bottom navigation items */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  menuButton: {
    //menu button
  },
  menuText: {
    //menu text/icon
  },
  title: {
    fontSize: 20,
  },
  settingsButton: {
    //settings button
  },
  settingsText: {
    //settings text/icon
  },
  feedContainer: {
    flex: 1,
  },
  post: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    padding: 10,
    
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#cccccc',
    marginRight: 10,
  },
  postInfo: {
    //post info container
  },
  userName: {
    fontWeight: 'bold',
  },
  userLocation: {
    //location text
  },
  postContent: {
    marginTop: 10,
  },
  postText: {
    //post text
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    //interaction icons
  },
  bottomNavigation: {
    //bottom navigation
  },
  // Additional styles...
});

export default FeedScreen;
