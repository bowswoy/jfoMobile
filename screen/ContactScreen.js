//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const ContactScreen = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => Linking.openURL('tel:0632697056')}>
                <Text style={{ fontSize: 38 }}>063 269 7056</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://g.page/OfficeofJusticeFund?share')}>
                <Text style={{ fontSize: 20 }}>404 หมู่ 3 ถนนแจ้งวัฒนะ แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร 10210</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default ContactScreen;
