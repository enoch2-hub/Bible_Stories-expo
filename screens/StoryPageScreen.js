import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const stories = [
  {
    id: 1,
    title: 'Story 1',
    content: 'This is the content of Story 1...',
  },
  {
    id: 2,
    title: 'Story 2',
    content: 'This is the content of Story 2...',
  },
  // Add more stories as needed
];

const StoryPageScreen = ({ navigation }) => {
  const navigateToStory = (storyId) => {
    // Navigate to the individual story page
    navigation.navigate('IndividualStory', { storyId });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Stories</Text>
      {stories.map((story) => (
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
          <Text style={{ fontSize: 18 }}>{story.title}</Text>
        </TouchableOpacity>
      ))}

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



    </ScrollView>
    
  );
};


const styles = StyleSheet.create({
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
});


export default StoryPageScreen;
