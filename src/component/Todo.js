import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormInput, Button } from 'react-native-elements';

import TodoList from './TodoList';

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
              title="Add"
              buttonStyle={{
                backgroundColor: "#512DA8"
              }}
            />
          </View>
          <View style={styles.containList}>
            <TodoList />
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containForm: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
    paddingTop: 40,
  },
  containList: {
    flex: 4,
    backgroundColor: '#512DA8',
  },
  formInput: {
    flex: 4,
  },
  button: {
    flex: 1,
  }
});

export default Todo;