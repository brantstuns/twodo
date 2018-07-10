import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TodoItem(props) {
  console.log(props);
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoItemText}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flex: 1
  },
  todoItemText: {
    fontSize: 20,
    color: '#A77066',
    textAlign: 'center'
  }
});