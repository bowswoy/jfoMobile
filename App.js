// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import ContactScreen from './screen/ContactScreen';
import TrackingScreen from './screen/TrackingScreen';
import NewsScreen from './screen/NewsScreen';
import FormScreen from './screen/FormScreen';
import ResultScreen from './screen/ResultScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'กองทุนยุติธรรม'
                    }} />
                <Stack.Screen name="Contact"
                    component={ContactScreen}
                    options={{ title: 'ติดต่อเรา' }} />
                <Stack.Screen
                    name="Tracking"
                    component={TrackingScreen}
                    options={({ route }) => ({ title: route.params.pageTitle })} />
                <Stack.Screen name="News" component={NewsScreen} />
                <Stack.Screen name="Form" component={FormScreen} />
                <Stack.Screen name="Result" component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;