import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FormInput, Button } from 'react-native-elements';
import { Loader } from "./Loader";

class TodoList extends Component {

  render() {

    const renderTodoItem = ({ item, index }) => {
      return (
            <ListItem
              key={index}
              title={item.text}
              hideChevron={true}
            />
      );
    };

    const renderResult = () => {
      if (this.props.error) {
        return (
          <View>
            <Text>{this.props.error}</Text>
          </View>
        );
      }
      else {
        return (
          <FlatList
            data={this.props.todos}
            renderItem={renderTodoItem}
            keyExtractor={item => item.id.toString()}
          />
        );
      }
    }
    return (
      this.props.isLoading ? <Loader/> : renderResult()
    );
  }
};

export default TodoList;