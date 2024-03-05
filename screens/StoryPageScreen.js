import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

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
  },
  {
    id: 5,
    title: `Naaman's Servant Girl`,
    intro: `A Message of Compassion and Healing`,
    imageUrl: require('../Assets/003.jpg'),
  },
  {
    id: 6,
    title: `Jonah and the Whale`,
    intro: `A Tale of Obedience, Repentance, and Divine Mercy`,
    imageUrl: require('../Assets/008.jpg'),
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
            padding: 20,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 20,
            backgroundColor: '#000000e1',
          }}
          onPress={() => navigateToStory(story.id)}
        >
          <Image style={styles.cardImg} source={story.imageUrl}  />
          <Text style={{ fontSize: 18, color: 'white' }}>{story.title}</Text>
          <Text style={{ fontSize: 10, color: 'white' }}>{story.intro}</Text>
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
      width: '100%',
      height: 150,
      borderRadius: 5,
  }

    
});


export default StoryPageScreen;
