import {Component} from 'react'
import {Text, View} from 'react-native'
import { NavigationContainer, ScreenContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
class Splash extends Component {
  render(){

    let button = {
      backgroundColor: 'black',
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 30,
    }
    let buttonCtn = {
      width: 200,
      marginHorizontal: 50,
      marginVertical: 10,
    }
    const nav = this.props.navigation
      return(
         <View style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center', 
          backgroundColor: "#C9E3DC", 
          
          }}>
            {console.log(this.props)}
          <Text >RateUs</Text>
          <Button
              title="LOG IN"
              buttonStyle={button}
              containerStyle={buttonCtn}
              titleStyle={{ fontWeight: 'bold' }}
              //onPress={()=> nav.push('Login')}
            />
           <Button
              title="REGISTER"
              buttonStyle={button}
              containerStyle={buttonCtn}
              titleStyle={{ fontWeight: 'bold' }}
            />
         </View>
      )
  }

}

  export default Splash