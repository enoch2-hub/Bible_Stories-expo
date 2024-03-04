import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native/lib/typescript/src';
import { useNavigation } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens (e.g., HomeScreen, StoryPageScreen)
import HomeScreen from './screens/HomeScreen';
import StoryPageScreen from './screens/StoryPageScreen';

const Stack = createStackNavigator();

const MainPage = () => {
  // const navigation = useNavigation();

  // const handlePress = () => {
  //   navigation.navigate('./components/StoryPage/StoryPage')
  //   // alert('h')
  // }
 
  return (
    <View style={styles.container}>

      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="StoryPage" component={StoryPageScreen} />
            </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});

export default MainPage;
