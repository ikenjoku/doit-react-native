import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const styles = StyleSheet.create({
    loadingView: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    loadingText: {
      color: '#2F3D38',
      fontSize: 14,
      fontWeight: 'bold'
    }
});

export const Loader = () => {
    return(
        <View style={styles.loadingView} >
            <ActivityIndicator size="large" color="#2F3D38" />
            <Text style={styles.loadingText} >Amazing things happen when we plan...</Text>
        </View>
    );
};