import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const mapStateToProps = state => ({
  todoItems: state.todoItems
});

export class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.todoItems);
    return (
      <View style={styles.todoListContainer}>
        <FlatList
          data={this.props.todoItems}
          keyExtractor={item => item.value}
          renderItem={({item}) => <TodoItem text={item.value}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 15
  },
  todoItemText: {
    fontSize: 20,
    color: '#A77066',
    textAlign: 'center'
  }
});

export default connect(mapStateToProps)(TodoList);