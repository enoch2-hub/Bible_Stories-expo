import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const StoryPageScreen = ({ navigation, route }) => {
  const { StoryData } = route.params;
  const [searchTerm, setSearchTerm] = useState('');

  const navigateToStory = (storyId) => {
    navigation.navigate('ReadStory', { storyId });
  };

  const filteredStories = StoryData.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.storypage}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Stories</Text>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by title"
        onChangeText={(text) => setSearchTerm(text)}
      />

      {filteredStories.map((story) => (
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
          <Image style={styles.cardImg} source={story.imageUrl} />
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
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default StoryPageScreen;
