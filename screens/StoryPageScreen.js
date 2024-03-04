import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const StoryData = [
  {
    id: 1,
    title: `Daniel in the Lion's den`,
    intro: `'Story of a faithful man of GOD'`,
  },
  {
    id: 2,
    title: 'The Prodigal Son',
    intro: 'This is the content of Story 2...',
  },
  {
    id: 3,
    title: `Joseph and the coat of many colours`,
    intro: 'A Journey from Betrayal to Redemption',
  }
];

const StoryPageScreen = ({ navigation }) => {
  const navigateToStory = (StoryId) => {
    // Navigate to the individual story page
    navigation.navigate('ReadStory', { StoryId });
  };

  return (
    <ScrollView style={styles.storypage}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Stories</Text>
      {StoryData.map((story) => (
        <TouchableOpacity
          key={story.id}
          style={{
            padding: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
          }}
          onPress={() => navigateToStory(story.id)}
        >
          <Image style={styles.cardImg} source={require('../Assets/003.jpg')}  />
          <Text style={{ fontSize: 18 }}>{story.title}</Text>
          <Text style={{ fontSize: 10 }}>{story.intro}</Text>
        </TouchableOpacity>
      ))}





    </ScrollView>
    
  );
};


const styles = StyleSheet.create({

  storypage: {
    padding: 20,
  },
  cardImg: {
      widht: '100%',
      height: 150,
      borderRadius: 5,
  }

    
});


export default StoryPageScreen;
