import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import styles from './Category.styles'; // Import your React Native styles

const Category = ({ bibleStories }) => {
  const route = useRoute();
  const navigation = useNavigation();
  const category = route.params.category;

  const filteredStories = bibleStories.filter(
    (story) => story.category === category
  );

  const uniqueCategories = [
    ...new Set(bibleStories.map((story) => story.category)),
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    // React Native doesn't have a global window object, so we can't use window.scrollTo
  }, []); // Empty dependency array to run the effect only once on mount

  const handleStoryPress = (storyId) => {
    navigation.navigate('StoryPage', { storyId });
  };

  return (
    <ScrollView style={styles.categoryContainer}>
      {category === 'all' ? (
        <View style={styles.allCategoryContainer}>
          {uniqueCategories.map((category) => (
            <View key={category} style={styles.categorySection}>
              <View style={styles.categoryContainer}>

                <TouchableOpacity
                  onPress={() => {}}
                  activeOpacity={0.7}
                >
                  <View style={styles.categoryCardContainer}>
                    {bibleStories
                      .filter((story) => story.category === category)
                      .map((story) => (
                        <TouchableOpacity
                          key={story.id}
                          onPress={() => handleStoryPress(story.id)}
                        >
                          <View style={styles.card}>
                            <Image
                              source={{ uri: story.image }} // Assuming story.image is a URI
                              style={styles.cardImage}
                              resizeMode="cover"
                            />
                            <Text style={styles.cardTitle}>{story.title}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                  </View>
                </TouchableOpacity>

              </View>
              <View style={styles.hrLine} />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
          >
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>
                {category === 'OTS'
                  ? 'Old Testament Stories'
                  : 'New Testament Stories'}
              </Text>
              <View style={styles.categoryCardContainer}>
                {filteredStories.map((story) => (
                  <TouchableOpacity
                    key={story.id}
                    onPress={() => handleStoryPress(story.id)}
                  >
                    <View style={styles.card}>
                      <Image
                        source={{ uri: story.image }} // Assuming story.image is a URI
                        style={styles.cardImage}
                        resizeMode="cover"
                      />
                      <Text style={styles.cardTitle}>{story.title}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Category;
