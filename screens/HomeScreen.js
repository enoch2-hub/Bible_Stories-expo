// HomeScreen.js

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToCarouselScreen = () => {
    navigation.navigate('CarouselScreen');
  };

  const navigateToStoriesScreen = () => {
    navigation.navigate('StoriesScreen');
  };

  const navigateToStoryPage = () => {
    navigation.navigate('StoryPage');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    

      <View style={styles.navbar}>
        <Text style={styles.navbarText}></Text>
      </View>


      <Text>Bible Stories</Text>
      <Swiper style={styles.carouselContainer} showsPagination={false} autoplay>
        <Image
          source={require('../Assets/003.jpg')}
          style={styles.carouselImage}
          />
        <Image
          source={require('../Assets/088.jpg')}
          style={styles.carouselImage}
          />
        <Image
          source={require('../Assets/090.jpg')}
          style={styles.carouselImage}
        />
      </Swiper>

      <Button title="Stories Screen" onPress={navigateToStoriesScreen} />
      <Button title="Story Page" onPress={navigateToStoryPage} />





      



      
    </View>
  );
};





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    navbar: {
      height: 100,
      backgroundColor: '#004ea7',
      padding: 15,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    navbarText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    carouselContainer: {
      height: 300,
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
   
  
  
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    gradientBackground: {
      height: 200,
      // ... other styles for the gradient background
    },
  });

export default HomeScreen;
