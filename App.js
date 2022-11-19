import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Text} from 'react-native'
import Home from './Pages/Home'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

// const HomeScreen = ({ navigation }) => {
//   return (
//    <Text>HI</Text>
//   );
// };

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};