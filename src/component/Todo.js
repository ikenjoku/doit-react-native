import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, Keyboard } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { add_todo_success } from '../redux/actions/todoActions';
import { logoutUser } from '../redux/actions/authActions';
import TodoList from './TodoList';
class Todo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    if (text.length > 0) {
      const newItem = { id: Math.floor(Math.random() * 10000), text }
      this.props.add_todo_success(newItem);
      Keyboard.dismiss();
    }
  }

  clearInput = () => {
    this.setState({ text: '' });
  }

  render() {
    const renderList = () => {
      if (this.props.todos.length > 0) {
        return (
          <View style={styles.containList}>
            <TodoList />
          </View>
        );
      } else {
        return (
          <View style={styles.message}>
            <Text style={styles.textMessage}>No items found.</Text>
            <Text style={styles.textMessage}>Amazing things happen when you plan...</Text>
          </View>
        );
      }
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.containTopbar}>
          <View style={styles.topbar}>
            <Text style={styles.title}>Do-It List</Text>
          </View>
          <View style={styles.logoutIcon}>
            <Icon
              name='sign-out'
              type='font-awesome'
              color='#fff'
              size={20}
              iconStyle={{paddingLeft: 20}}
              onPress={() => this.props.logoutUser()} />
          </View>
        </View>

        <View style={styles.containForm}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Add an item"
              placeholderTextColor='#151F38'
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
              style={styles.formInput}
            />
          </View>

          <Button
            onPress={() => { this.addTodo(this.state.text); this.clearInput() }}
            title="Submit"
            buttonStyle={{
              backgroundColor: "#2F3D38",
              borderRadius: 5,
              height: 50,
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
    backgroundColor: '#CBCECA'
  },
  containForm: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#151F38',
    paddingTop: 10,
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 14,
    backgroundColor: '#151F38'
  },
  formInput: {
    backgroundColor: 'white',
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    height: 50,
    width: 250
  },
  containList: {
    flex: 4,
    backgroundColor: '#CBCECA',
  },
  button: {
  },
  message: {
    flex: 4,
    backgroundColor: '#CBCECA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textMessage: {
    color: '#151F38'
  },
  topbar: {
    flex: 8,
    padding: 16,
    paddingTop: 30,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#151F38',
  },
  logoutIcon: {
    flex: 2,
    paddingTop: 38,
    backgroundColor: '#151F38',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  containTopbar: {
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps, { add_todo_success, logoutUser })(Todo);