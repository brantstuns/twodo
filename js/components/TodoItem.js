import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import CheckBox from 'react-native-modest-checkbox'

export default function TodoItem(props) {
  const { done, value, id } = props.todoItem;
  return (
    <View style={styles.todoItem}>
      <CheckBox onChange={() => props.handleItemClick(id)} checked={done} label={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    justifyContent: 'center'
  }
});