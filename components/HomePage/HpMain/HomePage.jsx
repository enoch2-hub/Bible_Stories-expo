import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Hp1 from '../Hp1/Hp1';
import Hp2 from '../Hp2/Hp2';

import styles from './HomePage.styles'; // Import your React Native styles

const HomePage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    require('../../../Assets/003.jpg'),
    require('../../../Assets/089.jpg'),
    require('../../../Assets/090.jpg'),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <ScrollView>
      <View style={styles.homepage}>
        <ScrollView horizontal pagingEnabled>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.carouselImage} />
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.carouselControl} onPress={prevSlide}>
          <Text style={styles.carouselControlText}>&#9665;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.carouselControl} onPress={nextSlide}>
          <Text style={styles.carouselControlText}>&#9655;</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.welcomeCard}>
        <Text style={styles.welcomeText}>
          For God so loved the world that he gave his one and only Son, that
          whoever believes in him shall not perish but have eternal life.
        </Text>
        <Text style={styles.bibleVerse}>John 3:16</Text>
      </View> */}

      <Hp1 bibleStories={props.bibleStories} />
      <Hp2 bibleStories={props.bibleStories} />
    </ScrollView>
  );
};

export default HomePage;
