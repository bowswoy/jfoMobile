//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

// create a component
const TrackingScreen = ({ route }) => {
    const { news_url } = route.params;

    const Loading = () => {
        return (
            <ActivityIndicator
                size="large"
                color="red"
                style={styles.ActivityIndicatorStyle}
            />
        )
    }

    return (
        <WebView
            startInLoadingState={true}
            renderLoading={() => <Loading />}
            source={{ uri: news_url == null ? 'https://jf.moj.go.th/c/tracking' : news_url }}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    ActivityIndicatorStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default TrackingScreen;
