import React, { Component } from 'react'
import { TextInput, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/styles'
import LoginPicture from '../../asset/login2.png'
export default class Login extends Component {
  render() {

    return (
      <ImageBackground source={LoginPicture}  style={styles.image}>
          
        <SafeAreaView style={styles.container}>

          {/* <Text style={{fontSize: ((styles.height/styles.width) *15), fontWeight: '500', textShadowRadius:2  }}>Log in to Vive</Text>
        <TextInput style={{borderBottomWidth : 1.0,  width: (deviceWidth/2), marginBottom: 15, marginTop: 30, borderColor: '#C4C5C8', fontSize: ((deviceHeight/deviceWidth) *9)}}></TextInput>
        <TextInput placeholder='Password'style={{borderBottomWidth : 1.0,  width: (deviceWidth/2), marginBottom: 30, marginTop: 15,borderColor: '#CBCCD0', fontSize: ((deviceHeight/deviceWidth) *9)}}></TextInput>
        <TouchableOpacity style={{paddingBottom: 12, paddingTop: 12, backgroundColor: third, alignItems:'center',
      justifyContent:'center', width: (deviceWidth/2), marginTop: 14, marginBottom: 16}}>
            <Text style={{ fontSize: ((deviceHeight/deviceWidth) *8), fontWeight:'600', letterSpacing:1, textTransform: 'uppercase'}} onPress={()=>this.props.navigation.navigate('Home')}>Log in</Text>
          </TouchableOpacity>
          <Text style={{fontSize: ((deviceHeight/deviceWidth) *6), paddingTop: 15}}>Forgot Password?</Text>
       <View style={{top:  deviceHeight/4.5, fontSize: ((deviceHeight/deviceWidth) *6)}}><Text>Don't have an account? <Text style={{fontWeight: '700'}}  onPress={()=> this.props.navigation.navigate('RegisterOne')}>Sign Up</Text></Text></View> */} 
       
        </SafeAreaView>
        </ImageBackground>
   
    )
  }
}
 