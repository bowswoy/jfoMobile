//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import TimeAgo from 'react-native-timeago';
import 'moment/locale/th';
import moment from 'moment';
moment.locale('th-th');

// create a component
const NewsScreen = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        // setMyData([90, 12]);
        // console.log(myData);
        axios.post('https://jfoapi.moj.go.th/api/jfnews',
            { type_news: 2 })
            .then((res) => {
                // console.log(res.data);
                setMyData(res.data.data)
            })
    }, []);

    return (
        <FlatList
            data={myData}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 16,
                            paddingHorizontal: 16,
                            borderColor: 'pink',
                            borderWidth: 1,
                            borderRadius: 16,
                            flexDirection: 'row',
                            padding: 16
                        }}
                        // onPress={() => Linking.openURL(item.news_href)}
                        onPress={() => navigation.navigate('Tracking', { news_url: item.news_href, pageTitle: item.name_news })}
                    >
                        <Image
                            source={{ uri: item.img_title }}
                            style={{ width: 100, height: 100, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
                            resizeMode='cover'
                        />
                        <View style={{
                            paddingLeft: 10,
                            paddingRight: 90
                        }}>
                            <Text
                                numberOfLines={3}
                                style={{ fontSize: 18 }}
                            >{item.name_news}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>เมื่อ </Text>
                                <TimeAgo time={item.date_add} />
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
            keyExtractor={item => item.id_run_news}
            ItemSeparatorComponent={() => <View style={{ height: 15 }}></View>}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default NewsScreen;
