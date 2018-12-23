import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { register_page, loginUser } from "../redux/actions/authActions";
import { add_alert } from "../redux/actions/alertActions";

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogIn = () => {
    const { email, password } = this.state;
    if (email && password){
    this.props.loginUser({ email, password });
    } else {
      this.props.add_alert('Please fill in all fields');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Do-It</Text>
        </View>
        <View style={styles.containLoginForm}>
          <View style={styles.field}>
            <TextInput
              placeholder='Email'
              placeholderTextColor='#151F38'
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
              style={styles.textInput} />
          </View>
          <View style={styles.field}>
            <TextInput
              placeholder='Password'
              placeholderTextColor='#151F38'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              style={styles.textInput} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handleLogIn}>
              <Text style={styles.loginButton}>
                Log In
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.register_page}>
              <Text style={styles.signupButton}>
                Sign Up
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#151F38',
  },
  titleContainer: {
    padding: 10,
    paddingTop: 40
  },
  title: {
    color: '#ffffff',
    fontSize: 35,
    alignSelf: 'center',
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    backgroundColor: '#ffffff',
  },
  textInput: {
    height: 40
  },
  loginButton: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#2F3D38',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  signupButton: {
    fontSize: 20,
    color: '#ffffff',
    borderWidth: 0.5,
    borderColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  activeButton: {
  },
  containLoginForm: {
    marginTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  formError: {
    color: 'red',
  }
});

export default connect(null, {register_page, loginUser, add_alert})(Login);