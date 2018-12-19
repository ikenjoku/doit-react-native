import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormInput, Button } from 'react-native-elements';

import TodoList from './TodoList';
import { todos } from '../mockData/todos';
class Todo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    console.log(text);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containForm}>
            <FormInput
              placeholder="Add an item"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
              containerStyle={styles.formInput}
            />
            <Button
              onPress={() => this.addTodo(this.state.text)}
              title="Submit"
              buttonStyle={{
                backgroundColor: "#2F3D38",
                borderRadius: 5
              }}
            />
          </View>
          <View style={styles.containList}>
            <TodoList todos={todos} error={null} isLoading={false} />
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151F38'
  },
  containForm: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
    paddingTop: 40,
  },
  containList: {
    flex: 4,
    backgroundColor: '#CBCECA',
  },
  formInput: {
    flex: 4,
  },
  button: {
    flex: 1,
  }
});

export default Todo;