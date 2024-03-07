import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package

const ExploreScreen = () => {
  // This would be your data fetched from an API or local source
  const data = new Array(12).fill(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <Icon name="filter-list" size={25} style={styles.filterIcon} />
      </View>
      <View style={styles.tabContainer}>
        {/* Replace with a proper tab component */}
        <Icon name="location-pin" size={25} />
        <Icon name="trending-up" size={25} />
        <Icon name="star-border" size={25} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <View style={styles.item} />}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  filterIcon: {
    padding: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  item: {
    flex: 1,
    margin: 2,
    height: 100, // Adjust the height as needed
    backgroundColor: '#f0f0f0', // Placeholder color
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});

export default ExploreScreen;