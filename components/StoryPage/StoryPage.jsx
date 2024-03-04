import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import styles from "./StoryPage.styles"; // Import your React Native styles

const StoryData = [
  {
    id: 1,
    title: "Story 1",
    intro: "Introduction to the Story",
    Story: "This is the content of Story 1...",
  },
];

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

  const navigateToStory = (storyId) => {
    navigation.navigate("ReadStory", { storyId });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Stories</Text>
      {StoryData.map((story) => (
        <TouchableOpacity
          key={story.id}
          style={{
            padding: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
          }}
          onPress={() => navigateToStory(story.id)}
        >
          <Text style={{ fontSize: 18 }}>{story.title}</Text>
          <Text style={{ fontSize: 14, color: "#666" }}>{story.intro}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StoryPage;
