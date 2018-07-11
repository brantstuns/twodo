import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import * as todoListActions from '../actions/todoListActions';

const mapStateToProps = state => ({
  todoItems: state.todoItems
});

const mapDispatchToProps = dispatch => ({
  updatedTodoItemDoneState: itemToUpdate => dispatch(todoListActions.updatedTodoItemDoneState(itemToUpdate))
});

export class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.todoListContainer}>
        <FlatList
          data={this.props.todoItems}
          keyExtractor={item => item.value}
          renderItem={({item}) => <TodoItem todoItem={item} handleItemClick={this.props.updatedTodoItemDoneState}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);