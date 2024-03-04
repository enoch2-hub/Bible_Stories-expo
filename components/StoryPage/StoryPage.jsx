import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './StoryPage.styles'; // Import your React Native styles

const StoryPage = (props) => {
  const route = useRoute();
  const { storyId } = route.params;

  const selectedStory = props.bibleStories.find(
    (story) => story.id === parseInt(storyId)
  );

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    // React Native doesn't have a global window object, so we can't use window.scrollTo
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <ScrollView style={styles.storyContainer}>
      <View style={styles.storypage}>
        {selectedStory ? (
          <View>
            <Text style={styles.title}>{selectedStory.title}</Text>
            <Text style={styles.heading}>Introduction to the Story</Text>
            <Text style={styles.intro}>{selectedStory.intro}</Text>
            <Text style={styles.heading}>The Story</Text>
            <Text style={styles.content}>{selectedStory.content}</Text>
          </View>
        ) : (
          <Text style={styles.notFound}>Story not found</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default StoryPage;
