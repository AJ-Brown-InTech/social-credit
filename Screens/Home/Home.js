import {Component} from 'react'
import {Text, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../styles/styles'
//Main User screens
import Activity from './Activity'
import Discover from './Discover'
import Feed from './Feed'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}



class Home extends Component {
render(){
    return(
        // <View style={{
        //     flex: 1, 
        //     alignItems: 'center',
        //     justifyContent: 'center', 
        // }}>
        //     <Text >Home Page</Text>
        //    </View>
    <Tab.Navigator>
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
            )
    }
}

  export default Home