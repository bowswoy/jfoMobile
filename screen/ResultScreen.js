//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

// create a component
const ResultScreen = ({ route, navigation }) => {
    const { result } = route.params;
    if (result == 'success') {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        marginBottom: 30
                    }}
                >
                    <Image
                        source={require('./../assets/success.png')}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                </View>

                <View
                    style={{
                        marginBottom: 30
                    }}
                >
                    <Text style={{
                        fontSize: 22
                    }}>เราได้รับข้อมูลของท่านแล้ว</Text>
                </View>
                <View>
                    <Button
                        title='เสร็จลิ้น'
                        onPress={() => navigation.replace('Home')}
                    ></Button>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        marginBottom: 30
                    }}
                >
                    <Image
                        source={require('./../assets/fail.png')}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                </View>

                <View
                    style={{
                        marginBottom: 30
                    }}
                >
                    <Text style={{
                        fontSize: 22
                    }}>พบข้อผิดพลาดบางอย่าง โปรดลองอีกครั้ง</Text>
                </View>
                <View>
                    <Button
                        title='เสร็จลิ้น'
                        onPress={() => navigation.replace('Form')}
                    ></Button>
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default ResultScreen;
