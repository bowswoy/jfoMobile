//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>

      <View style={{
        marginBottom: 15
      }}>
        <Image
          style={{
            width: '100%',
            height: 150,
          }}
          source={require('./assets/header.png')}
        />
      </View>


      {/* Menu */}
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 80
      }}>

        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'red'
        }}></View>

        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'blue'
        }}></View>

        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'green'
        }}></View>

        <View style={{
          width: 50,
          height: 50,
          backgroundColor: 'pink'
        }}></View>

      </View>

      {/* News */}
      <View>

        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <Image
            source={{ uri: 'https://jfo.moj.go.th/imgs/imgs_title/1608868994.png' }}
            style={{
              width: 100,
              height: 100
            }}
            resizeMode='cover' />
          <View>
            <Text style={{ fontSize: 16, paddingLeft: 5 }}>
              กิจกรรมการแลกเปลี่ยนเรียนรู้ (KM : Knowledge Management) ในหัวข้อ แนวทางการจัดทำสัญญาและติดตามคดี
              </Text>
          </View>
        </View>
        

      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
