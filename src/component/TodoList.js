import React, { Component } from 'react';
import { FlatList, Button, Text, View, Modal, StyleSheet } from 'react-native';
import { ListItem, FormInput } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swipeout from 'react-native-swipeout';
import { Loader } from "./Loader";

class TodoList extends Component {
  state = {
    showModal: false,
    itemTextToEdit: ''
  };

  handleEditItem = ({ id, text }) => {
    this.setState({
      itemTextToEdit: text,
      showModal: true
     });

  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  editItem = () => {
    console.log('edit the item here');
    this.setState({ itemTextToEdit: '' });
  }

  render() {

    const renderTodoItem = ({ item, index }) => {
      const swipeButton = [
        {
          text: 'Delete',
          type: 'delete',
          onPress: () => {
            console.log('Remove this item')
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
          <View>
            <FlatList
              data={this.props.todos}
              renderItem={renderTodoItem}
              keyExtractor={item => item.id.toString()}
            />
            <View>
            <Modal animationType={"slide"} transparent={false}
              visible={this.state.showModal}
              onDismiss={() => this.toggleModal()}
              onRequestClose={() => this.toggleModal()}>
              <View style={styles.modal}>
                <FormInput
                  placeholder={this.state.itemTextToEdit}
                  onChangeText={(text) => this.setState({ itemTextToEdit: text })}
                  value={this.state.itemTextToEdit}
                  containerStyle={styles.formInput}
                />

                <Button
                  onPress={() => { this.editItem(this.state.itemTextToEdit); this.toggleModal(); }}
                  color="#512DA8"
                  title="Update"
                />
              </View>
            </Modal>
            </View>
          </View>

        );
      }
    }
    return (
      this.props.isLoading ? <Loader /> : renderResult()
    );
  };
};

const styles = StyleSheet.create({
  modal: {

  }
});

export default TodoList;