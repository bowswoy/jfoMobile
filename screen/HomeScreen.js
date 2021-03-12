//import liraries
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import TimeAgo from 'react-native-timeago';

const screenWidth = Dimensions.get('screen').width;
const itemWidth = screenWidth * 0.75;
// create a component
const HomeScreen = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        axios.post('https://jfoapi.moj.go.th/api/jfnews', { type_news: 2 })
            .then((res) => {
                setMyData(res.data.data);
                // console.log(res.data.data)
            });
    }, []);

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
                    justifyContent: 'space-around',
                    marginTop: 20
                }}
            >
                {/* Menu 1 */}
                <TouchableOpacity onPress={() => navigation.navigate('Form')} style={styles.menuView}>
                    <View style={styles.menuBackground}>
                        <Image
                            source={require('./../assets/menu-1.png')}
                            style={styles.menuIcon}
                        />
                    </View>
                    <Text>ยื่นคำขอ</Text>
                </TouchableOpacity>

                {/* menu 2 */}
                <TouchableOpacity onPress={() => navigation.navigate('Tracking', { news_url: 'https://jf.moj.go.th/c/tracking' })} style={styles.menuView}>
                    <View style={styles.menuBackground}>
                        <Image
                            source={require('./../assets/menu-2.png')}
                            style={styles.menuIcon}
                        />
                    </View>
                    <Text>ติดตามคำขอ</Text>
                </TouchableOpacity>

                {/* Menu 3 */}
                <TouchableOpacity onPress={() => navigation.navigate('News')} style={styles.menuView}>
                    <View style={styles.menuBackground}>
                        <Image
                            source={require('./../assets/menu-3.png')}
                            style={styles.menuIcon}
                        />
                    </View>
                    <Text>ข่าวสาร</Text>
                </TouchableOpacity>

                {/* Menu 4 */}
                <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.menuView}>
                    <View style={styles.menuBackground}>
                        <Image
                            source={require('./../assets/menu-4.png')}
                            style={styles.menuIcon}
                        />
                    </View>
                    <Text>ติดต่อเรา</Text>
                </TouchableOpacity>

            </View>

            <View style={{
                marginVertical: 15,
                paddingLeft: 15
            }}>
                <Text style={{
                    fontSize: 26
                }}>ข่าวล่าสุด</Text>
            </View>

            <FlatList
                data={myData}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={{
                                width: itemWidth,
                                marginHorizontal: 10,
                            }}
                            onPress={() => navigation.navigate('Tracking', {news_url: item.news_href, pageTitle: item.name_news})}
                        >
                            <View style={{
                                borderWidth: 1,
                                borderColor: '#ddd',
                                borderRadius: 20,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 1,
                                    height: 3
                                },
                                shadowOpacity: 1
                            }}
                            >
                                <Image
                                    source={{ uri: item.img_title }}
                                    style={{
                                        width: '100%',
                                        height: 175,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }}
                                    resizeMode={'cover'}
                                />

                                <View style={{
                                    padding: 15
                                }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text
                                            numberOfLines={2}
                                            style={{
                                                fontSize: 18,
                                                color: '#a01a26'
                                            }}>{item.name_news}</Text>
                                    </View>
                                    <TimeAgo time={item.date_add} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id_run_news}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    menuView: {
        alignContent: 'center',
        alignItems: 'center',
    },
    menuBackground: {
        backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50
    },
    menuIcon: {
        width: 24,
        height: 24
    }
});

//make this component available to the app
export default HomeScreen;
