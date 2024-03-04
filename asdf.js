import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Bible Stories</Text>
      </View>

      {/* Image Carousel */}
      <ScrollView>
        <Image
          source={require('../../assets/carousel-image-1.jpg')}
          style={styles.carouselImage}
          resizeMode="cover"
        />
        {/* Add more carousel images as needed */}
      </ScrollView>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        {/* Add your cards here */}
        {/* Each card can be a TouchableOpacity or TouchableHighlight with onPress handling */}
        {/* Example card:
            <TouchableOpacity style={styles.card} onPress={() => handleCardPress('StoryId')}>
              <Text style={styles.cardText}>Story Title</Text>
            </TouchableOpacity>
        */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
  },
  navbarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  carouselImage: {
    height: 200,
    width: '100%',
  },
  cardContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ecf0f1',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainPage;
