import {Component} from 'react'
import {Text, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles/styles'
//Main User screens
import Activity from './Activity'
import Discover from './Discover'
import Feed from './Feed'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

class Home extends Component {
render(){
    return(
   
    <Tab.Navigator 
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#99b9ad',
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      lazy: false,
      removeClippedSubviews: false,
      showLabel: false,
    }}>
      <Tab.Screen name="Activity" component={Activity}  
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}/>
      <Tab.Screen name="Discover" component={Discover} 
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
        headerShown: false
      }}/>
      <Tab.Screen name="Feed" component={Feed} 
      options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
            )
    }
}

  export default Home