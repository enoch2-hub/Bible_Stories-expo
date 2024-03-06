// ReadStory.js

import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ReadStory = ({ route }) => {
  const { StoryId, StoryData } = route.params; // Get the storyId from the navigation rout

const selectedStory = StoryData.find((Story) => Story.id === StoryId);

    if(!selectedStory) {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.notFound}>Story not found</Text>
            </ScrollView>
        )
    }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.backgroundImage} source={selectedStory.bckgimg} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{selectedStory.title}</Text>
        <Text style={styles.intro}>{selectedStory.intro}</Text>
        <Text style={styles.content}>{selectedStory.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // opacity: 0.5,
  },
  contentContainer: {
    padding: 20,
    marginTop: 120, // Adjust the marginTop as needed
    // backgroundColor: '#1f1f1f', 
    backgroundColor: '#d6d6d6', 
    borderRadius: 10,
    opacity: 0.8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    // color: '#fff',
    color: '#1f1f1f',
  },
  intro: {
    fontSize: 16,
    marginBottom: 15,
    // color: '#fff',
    color: '#1f1f1f',
},
content: {
    fontSize: 18,
    lineHeight: 24,
    // color: '#fff',
    color: '#1f1f1f',
  },

  notFound: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
});

export default ReadStory;
