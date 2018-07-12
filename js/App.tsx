import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import TopBar from './components/TopBar';
import rootReducer from './reducers/rootReducer';
import TodoList from './components/TodoList';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <TopBar style={styles.topbar}/>
            <TodoList style={styles.list}/>
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9CFC1',
    justifyContent: 'space-around',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#D9CFC1'
  }
});
