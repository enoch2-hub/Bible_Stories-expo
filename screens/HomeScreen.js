// HomeScreen.js

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const HomeScreen = () => {
  const navigation = useNavigation();


  const navigateToStoryPage = () => {
    navigation.navigate('StoryPage');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    

      <View style={styles.navbar}>
        <Image source={require('../Assets/Logo2.png')} style={styles.logo}/>
        <Text style={styles.navbarText}>Bible Stories</Text>
      </View>


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


      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Card 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Card 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Card 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Card 3</Text>
        </TouchableOpacity>
      </View>

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
      width: '100%',
    //   backgroundColor: '#1f1f1f',
      padding: 15,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 20,
    },
    navbarText: {
    //   color: '#fff',
      color: '#1f1f1f',
      fontSize: 30,
    },
    logo: {
      height: 100,
      width: 110,
    },
    carouselContainer: {
      marginTop: 30,
      height: 300,
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
   
    cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    },
    card: {
    width: '45%',
    height: 100,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    },
    cardText: {
    color: '#fff',
    fontSize: 18,
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
