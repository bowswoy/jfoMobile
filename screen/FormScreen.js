//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import axios from 'axios';

// create a component
const FormScreen = ({ navigation }) => {
    const [value, setValue] = useState('');

    const [c_prefix, setPrefix] = useState('');
    const [c_firstname, setFirstName] = useState('');
    const [c_lastname, setLastName] = useState('');
    const [c_idcard, setIDCard] = useState('');
    const [c_birthdate, setBirthDate] = useState('');
    const [c_mobile, setMobile] = useState('');
    const [c_detail, setDetail] = useState('');

    const onSendButton = () => {
        var DATA = {
            c_prefix,
            c_firstname,
            c_lastname,
            c_idcard,
            c_birthdate,
            c_mobile,
            c_detail
        }

        if (c_prefix == '') {
            Alert.alert(
                "แจ้งเตือน",
                "โปรดระบุคำนำหน้าชื่อ"
            );
            return false;
        } else if(c_firstname == '' || c_lastname == '') {
            Alert.alert(
                "แจ้งเตือน",
                "โปรดระบุชื่อ - สกุล"
            );
            return false;
        } else if(c_idcard == '' || c_idcard.length != 13 || isNaN(c_idcard)) {
            Alert.alert(
                "แจ้งเตือน",
                "โปรดระบุเลขประจำตัวประชาชนให้ถูกต้อง"
            );
            return false;
        } else if(c_birthdate == '') {
            Alert.alert(
                "แจ้งเตือน",
                "โปรดระบุเลขวันเกิดให้ถูกต้อง"
            );
            return false;
        }

        // console.log(DATA);
        axios.post('https://ws.puwanai.com/ws_post.php', DATA).then((res) => {
            navigation.replace('Result', res.data);
        }).catch((err) => {
            Alert.alert('Error');
        });
        // navigation.replace('Result', {result: 'dd'});
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
            >
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>คำนำหน้าชื่อ</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setPrefix(text)}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>ชื่อ</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setFirstName(text)}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>นามสกุล</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setLastName(text)}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>เลขประจำตัวประชาชน</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setIDCard(text)}
                        keyboardType={'number-pad'}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>วันเกิด</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setBirthDate(text)}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>โทรศัพท์</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text) => setMobile(text)}
                        keyboardType={'number-pad'}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Text style={styles.labelText}>รายละเอียด</Text>
                    <TextInput
                        style={styles.inputStyle}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => setDetail(text)}
                    ></TextInput>
                </View>
                <View style={styles.mb3}>
                    <Button
                        title={'ส่งข้อมูล'}
                        onPress={onSendButton}
                    ></Button>
                </View>
                {/* <Text>FormScreen</Text>
            <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => {
                    // console.log(text);
                    setValue(text);
                }}
            ></TextInput>

            <View
                style={{
                    marginTop: 20
                }}
            >
                <Button title='Send'></Button>
            </View>

            <View
                style={{
                    marginTop: 20
                }}
            >
                <Text>Value is: {value}</Text>
            </View> */}
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    inputStyle: {
        borderWidth: 2,
        borderColor: 'blue',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    mb3: {
        marginBottom: 20
    },
    labelText: {
        fontSize: 18
    }
});

//make this component available to the app
export default FormScreen;
