import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const CirclesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}> Circles</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchText}>🔍</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
      >
        
      </ScrollView>

      <View style={styles.profileSection}>
        <Image style={styles.avatar} source={{ uri: 'path_to_avatar' }} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Jane Doe</Text>
          <Text style={styles.userLocation}>Location</Text>
        </View>
      </View>

      <View style={styles.post}>
        <View style={styles.interactionBar}>
          {/* Interaction icons */}
        </View>
        <Text style={styles.postContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <View style={styles.imagePlaceholders}>
          {/* Image placeholders */}
        </View>
      </View>

      <View style={styles.bottomTab}>
        {/* Bottom tab icons */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuButton: {
     },
  menuText: {}
    ,
  headerTitle: {
    fontSize: 20,
  },
  searchButton: {
    
  },
  searchText: {
     },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  carouselContainer: {
   
  },
  profileSection: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
  userLocation: {
  
  },
  post: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,

  },
  interactionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  postContent: {

  },
  imagePlaceholders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  bottomTab: {

  },
 
});

export default CirclesScreen;
