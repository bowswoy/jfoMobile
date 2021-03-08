//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

// create a component
const HomeScreen = ({ navigation }) => {

    const Header = () => {
        return (
            <View>
                <Image
                    source={require('./../assets/header.png')}
                    style={{
                        width: '100%',
                        height: 150,
                    }}
                />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <Header />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >
                <View>
                    <View
                        style={{
                            backgroundColor: 'red',
                            alignContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            borderRadius: 25,
                            width: 50,
                            height: 50
                        }}
                    >
                        <Image
                            source={require('./../assets/menu-1.png')}
                            style={{
                                width: 24,
                                height: 24
                            }}
                        />
                    </View>
                    <Text>ยื่นคำขอ</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default HomeScreen;
