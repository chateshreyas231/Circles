import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'url' }}
            style={styles.profileImage}
          />
        </View>

        {/* Icon Buttons */}
        <View style={styles.iconContainer}>
          {/* icon components */}
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
      </View>

      {/* Content Grid */}
      <View style={styles.contentGrid}>
        {/* content components */}
        <View style={styles.contentItem} />
        <View style={styles.contentItem} />
        <View style={styles.contentItem} />
        <View style={styles.contentItem} />
        
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e1e1e1',
  },
  contentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  contentItem: {
    width: '30%',
    height: 100,
    backgroundColor: '#e1e1e1',
    marginBottom: 10,
  },
  tabBar: {
    height: 60,
    backgroundColor: '#f1f1f1',
  },
});

export default ProfileScreen;