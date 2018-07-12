import React from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import * as todoListActions from '../actions/todoListActions';

const mapStateToProps = state => ({
  todoItems: state.todoItems
});

const mapDispatchToProps = dispatch => ({
  addNewTodoItem: () => dispatch(todoListActions.addNewTodoItem()),
  updatedTodoItemDoneState: itemToUpdate => dispatch(todoListActions.updatedTodoItemDoneState(itemToUpdate))
});

export class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.todoListContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={this.props.todoItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <TodoItem todoItem={item} handleItemClick={this.props.updatedTodoItemDoneState}/>}
          />
        </View>
        <View style={styles.todoListButtonsContainer}>
          <Button style={styles.addTodoItemButton} title={'+'} onPress={this.props.addNewTodoItem}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 10,
    justifyContent: 'space-between'
  },
  listContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  todoListButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);