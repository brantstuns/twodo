import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.topBarText}>TwoDo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB1A3',
    justifyContent: 'space-around'
  },
  topBarText: {
    fontSize: 20,
    color: '#A77066',
    textAlign: 'center'
  }
});