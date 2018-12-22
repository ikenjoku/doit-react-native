import React, { Component } from 'react';
import { connect } from "react-redux";
import Todo from './Todo';
import SignUp from './SignUp';
import Login from './Login';

class Main extends Component {

  render() {
    if(this.props.userId){
      return (<Todo/>);
    } else if (this.props.signup){
      return (<SignUp/>);
    } else {
      return (<Login/>);
    }
  }
};

const mapStateToProps = ({ authReducer }) => ({
  userId: authReducer.userId,
  signup: authReducer.signup,
});

export default connect(mapStateToProps, null)(Main);