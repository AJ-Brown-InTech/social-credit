import {Component} from 'react'
import { View} from 'react-native'
import { Button, Text } from '@rneui/themed';
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
 
      return(
       
         <View style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center', 
          backgroundColor: "#C9E3DC", 
          
          }}>
            {console.log(this.props.navigation.push)}
          <Text h4>Welcome to Rate Me</Text>
          <Button
              title="LOG IN"
              buttonStyle={button}
              containerStyle={buttonCtn}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={()=> this.props.navigation.navigate('Login')}
            />
           <Button
              title="REGISTER"
              buttonStyle={button}
              containerStyle={buttonCtn}
              titleStyle={{ fontWeight: 'bold' }}
              onPress={()=> this.props.navigation.navigate('RegisterOne')}
            />
         </View>
      )
  }

}

  export default Splash