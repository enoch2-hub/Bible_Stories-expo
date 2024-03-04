import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./ParablesTable.styles"; // Import your React Native styles

const ParablesTable = (props) => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    // React Native doesn't have a global window object, so we can't use window.scrollTo
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <ScrollView style={styles.parablesTableMain}>
      <Text style={styles.heading}>Table 1</Text>

      <View style={styles.parablesTableContainer}>
        <View style={styles.tableContainer}>
          <Text style={styles.tableHeader}>Parable</Text>
          <Text style={styles.tableHeader}>Matthew</Text>
          <Text style={styles.tableHeader}>Mark</Text>
          <Text style={styles.tableHeader}>Luke</Text>

          <Text style={styles.tableRow}>The Purpose of the Parables</Text>
          <Text style={styles.tableRow}>13:10-17</Text>
          <Text style={styles.tableRow}>4:10-12</Text>
          <Text style={styles.tableRow}>8:9-10</Text>

          {/* ... (Repeat the same structure for other rows) */}
        </View>
      </View>

      <Text style={styles.heading}>Table 2</Text>

      <View style={styles.parablesTableContainer}>
        <View style={styles.tableContainer}>
          <Text style={styles.tableHeader}>Parable</Text>
          <Text style={styles.tableHeader}>Matthew</Text>
          <Text style={styles.tableHeader}>Mark</Text>
          <Text style={styles.tableHeader}>Luke</Text>

          <Text style={styles.tableRow}>The Ten Virgins</Text>
          <Text style={styles.tableRow}>25:1-13</Text>
          <Text style={styles.tableRow}></Text>
          <Text style={styles.tableRow}></Text>

          {/* ... (Repeat the same structure for other rows) */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ParablesTable;
