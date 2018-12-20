import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {add_todo_success} from '../redux/actions/todoActions';
import TodoList from './TodoList';
import { todos } from '../mockData/todos';
class Todo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    console.log(text);
    if(text.length > 0){
    const newItem = {id : Math.floor(Math.random() * 10000), text}
    this.props.add_todo_success(newItem)
    }
  }

  clearInput = () => {
    this.setState({text: ''});
  }

  render() {
    const renderList = () => {
      if(this.props.todos.length > 0){
        return (
          <View style={styles.containList}>
            <TodoList />
          </View>
        );
      } else {
        return (
          <View style={styles.message}>
            <Text style={styles.textMessage}>No items found.</Text>
            <Text style={styles.textMessage}>Amazings happens when you plan...</Text>
          </View>
        );
      }
    }
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
              onPress={() => {this.addTodo(this.state.text); this.clearInput()}}
              title="Submit"
              buttonStyle={{
                backgroundColor: "#2F3D38",
                borderRadius: 5
              }}
            />
          </View>
          {renderList()}
      </View>
    );
  }
};

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos
});

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
  },
  message: {
    flex: 4,
    backgroundColor: '#151F38',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textMessage: {
    color: '#ffffff'
  }
});

export default connect(mapStateToProps, { add_todo_success })(Todo);