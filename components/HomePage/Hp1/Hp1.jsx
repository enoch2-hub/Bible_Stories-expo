import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Hp1.styles'; // Import your React Native styles

const Hp1 = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const cardElements = document.querySelectorAll('.hidden');

    cardElements.forEach((element) => observer.observe(element));

    // Cleanup the observer when the component unmounts
    return () => {
      cardElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  let category = 'OTS';
  const filteredStories = props.bibleStories
    .filter((story) => story.category === category)
    .slice(0, 6);

  const handleStoryPress = (storyId) => {
    navigation.navigate('StoryPage', { storyId });
  };

  return (
    <View style={styles.hpSection1}>
      <Text style={styles.sectionTitle}>Old Testament Stories ___</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        {filteredStories.map((story) => (
          <TouchableOpacity
            key={story.id}
            onPress={() => handleStoryPress(story.id)}
            style={styles.cardContainer}
          >
            <View style={styles.card}>
              <Image source={story.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{story.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => navigation.navigate('Category', { category: 'OTS' })}>
          <Text style={styles.btn}>View All</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Hp1;
