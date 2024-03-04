import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FaUser } from 'react-icons/fa';

import styles from './Navbar.styles'; // Import your React Native styles

const Navbar = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    // Navigate to the Home screen, adjust it according to your navigation setup
    navigation.navigate('Home');
  };

  const goToCategory = () => {
    // Navigate to the Category screen, adjust it according to your navigation setup
    navigation.navigate('Category');
  };

  const goToAbout = () => {
    // Navigate to the About screen, adjust it according to your navigation setup
    navigation.navigate('About');
  };

  const goToMore = () => {
    // Navigate to the More screen, adjust it according to your navigation setup
    navigation.navigate('More');
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={goToHome}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../Assets/Logo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>

      <View style={styles.nav}>
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={goToHome}>
            <Text style={styles.navLinkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToCategory}>
            <Text style={styles.navLinkText}>Category</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToAbout}>
            <Text style={styles.navLinkText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToMore}>
            <Text style={styles.navLinkText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <FaUser size={20} color="white" />
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
