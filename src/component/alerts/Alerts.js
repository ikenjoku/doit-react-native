import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { remove_alert } from "../../redux/actions/alertActions";

const Alerts = (props) => {
  const { alert, remove_alert } = props;
  return (
    <TouchableWithoutFeedback onPress={() => remove_alert(alert.messageId)}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {alert.message}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 2,
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
  },
  text: {
    color: '#a94442'
  }
});

const mapStateToProps = ({ alertReducer }) => ({
  alerts: alertReducer.alerts,
});

export default connect(mapStateToProps, { remove_alert })(Alerts);