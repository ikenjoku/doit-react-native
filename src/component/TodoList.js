import React, { Component } from 'react';
import { FlatList, Button, Text, View, Modal, StyleSheet, TextInput, ScrollView, RefreshControl } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo, fetchTodos } from '../redux/actions/todoActions';
import { Loader } from "./Loader";

class TodoList extends Component {
  state = {
    showModal: false,
    itemTextToEdit: '',
    itemIdToEdit: '',
    refreshing: false,
  };

  handleEditItem = ({ _id, text }) => {
    this.setState({
      itemTextToEdit: text,
      itemIdToEdit: _id,
      showModal: true
     });

  }

  onRefresh = () => {
    const { fetchTodos, userId} = this.props;
    fetchTodos(userId);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  clearState = () => {
    this.setState({
      itemIdToEdit: '',
      itemTextToEdit: ''
    });
  };

  editItem = () => {
    const { itemIdToEdit, itemTextToEdit } = this.state;
    const updatedItem = {id: itemIdToEdit, text: itemTextToEdit};
    this.props.updateTodo(this.props.userId, updatedItem);
    this.clearState();
  }

  render() {

    const renderTodoItem = ({ item, index }) => {
      const swipeButton = [
        {
          text: 'Delete',
          type: 'delete',
          onPress: () => {
            this.props.deleteTodo(this.props.userId, item._id)
          }
        },
        {
          text: 'Edit',
          type: 'primary',
          onPress: () => {
            this.handleEditItem(item)
          }
        }
      ];

      return (
        <Swipeout right={swipeButton} autoClose={true}>
          <Animatable.View animation="bounceInDown" duration={2000} style={{ backgroundColor: '#CBCECA' }}>
            <ListItem
              key={index}
              title={item.text}
              hideChevron={true}
            />
          </Animatable.View>
        </Swipeout>
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
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <FlatList
              data={this.props.todos}
              renderItem={renderTodoItem}
              keyExtractor={item => item._id.toString()}
            />
            <View>
            <Modal animationType={"slide"} transparent={false}
              visible={this.state.showModal}
              onDismiss={() => this.toggleModal()}
              onRequestClose={() => this.toggleModal()}>
              <View style={styles.modal}>
                <TextInput
                  placeholder={this.state.itemTextToEdit}
                  onChangeText={(text) => this.setState({ itemTextToEdit: text })}
                  value={this.state.itemTextToEdit}
                  style={styles.formInput}
                />

                <Button
                  onPress={() => { this.editItem(this.state.itemTextToEdit); this.toggleModal(); }}
                  color="#2F3D38"
                  title="Update"
                  style={styles.updateBtn}
                />
              </View>
            </Modal>
            </View>
          </ScrollView>

        );
      }
    }
    return (
      this.props.isFetching ? <Loader /> : renderResult()
    );
  };
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#CBCECA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formInput: {
    color: '#151F38',
    borderColor: '#151F38',
    padding: 30,
  },
  updateBtn: {
    borderRadius: 5
  }
});

const mapStateToProps = ({ todoReducer, authReducer }) => ({
  userId: authReducer.userId,
  todos: todoReducer.todos,
  error: todoReducer.error,
  isFetching: todoReducer.isFetching,
});

export default connect(mapStateToProps, { updateTodo, deleteTodo, fetchTodos })(TodoList);