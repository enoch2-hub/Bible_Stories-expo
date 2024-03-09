import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';



const StoryPageScreen = ({ navigation, route }) => {

  const { StoryData } = route.params; // Get the storyId from the navigation route

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
