import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';

import styles from './Footer.styles'; // Import your React Native styles

const Footer = () => {
  const openLink = () => {
    // Adjust the link to the appropriate URL
    Linking.openURL('https://www.freeiconspng.com/img/25682');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={openLink}>
        <Text style={styles.linkText}>High Resolution Book Png Clipart</Text>
      </TouchableOpacity>

      <View style={styles.hr} />

      <Text style={styles.copyRight}>&copy; 2024 Bible Stories</Text>
    </View>
  );
};

export default Footer;
