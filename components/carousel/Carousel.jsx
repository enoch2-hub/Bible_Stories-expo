import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    require('../../Assets/003.jpg'),
    require('../../Assets/089.jpg'),
    require('../../Assets/090.jpg'),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <View style={styles.carouselContainer}>
      <View
        style={{ ...styles.carouselInner, transform: [{ translateX: -activeIndex * 100 + '%' }] }}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.carouselItem}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.carouselControl} onPress={prevSlide}>
        <Text style={styles.controlText}>{'\u25C1'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.carouselControl} onPress={nextSlide}>
        <Text style={styles.controlText}>{'\u25B7'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  carouselInner: {
    flexDirection: 'row',
    width: '300%', // Three times the width for horizontal scrolling
  },
  carouselItem: {
    width: '100%',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carouselControl: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    transform: [{ translateY: '-50%' }],
  },
  controlText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CarouselComponent;
