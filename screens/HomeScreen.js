// HomeScreen.js

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';

const StoryData = [
  {
    id: 1,
    title: `Daniel in the Lion's den`,
    intro: `'Story of a faithful man of GOD'`,
    imageUrl: require('../Assets/007.jpg'),
  },
  {
    id: 2,
    title: 'The Prodigal Son',
    intro: 'This is the content of Story 2...',
    imageUrl: require('../Assets/004.jpg'),
  },
  {
    id: 3,
    title: `Joseph and the coat of many colours`,
    intro: 'A Journey from Betrayal to Redemption',
    imageUrl: require('../Assets/005.jpg'),
  },
  {
    id: 4,
    title: 'Blind Bartimaeus',
    intro: 'A Story of Faith and Healing',
    imageUrl: require('../Assets/011.jpg'),

  }
];


const HomeScreen = () => {
  const navigation = useNavigation();


  const navigateToStoryPage = () => {
    navigation.navigate('StoryPage');
  };


  const navigateToStory = (StoryId) => {
    // Navigate to the individual story page
    navigation.navigate('ReadStory', { StoryId });
  };





  return (
    <ScrollView style={styles.storypage}>
    

      {/* <View style={styles.navbar}>
        <Image source={require('../Assets/Logo2.png')} style={styles.logo}/>
        <Text style={styles.navbarText}>Bible Stories</Text>
      </View> */}


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


      <Text style={styles.headerText}>Stories</Text>

    <View style={styles.cardsContainer}>
      {StoryData.map((story) => (
        <TouchableOpacity
          key={story.id}
          style={styles.card}
          onPress={() => navigateToStory(story.id)}
          >
          <Image style={styles.cardImg} source={story.imageUrl}  />
          <Text style={{ fontSize: 15, color: '#fff' }}>{story.title}</Text>
          <Text style={{ fontSize: 10, color: '#fff' }}>{story.intro}</Text>
        </TouchableOpacity>
      ))}
      </View>


      <Button title="Story Page" onPress={navigateToStoryPage} />



    </ScrollView>
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
      // marginTop: 30,
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
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    width: '45%',
    backgroundColor: '#1d1d1d',
    // height: 100,
    // backgroundColor: '#1d1d1d',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 10,
    // marginBottom: 10,
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




    headerText: {
      marginTop: 60,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
      textAlign: 'center',
      backgroundColor: '#000000e1',
      borderRadius: 50,
      padding: 20,
    },


    storypage: {
      // padding: 20,
    },
    cardsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 20,
      gap: 10,
    },
    cardImg: {
        width: '100%',
        height: 150,
        borderRadius: 5,
    },
  
  });



export default HomeScreen;
