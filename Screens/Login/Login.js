import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

export default class Login extends Component {
  render() {
    const deviceHeight = Dimensions.get('window').height
    const deviceWidth = Dimensions.get('window').width
    const primary = '#e8dec7'
    const secondary = '#1c1c1c'
    const third = '#99b9ad'
    const style = StyleSheet.create({
     container: {
       flex: 3,
       flexDirection: 'column',
       alignItems:'center',
       justifyContent:'center',
       fontFamily: 'Helvetica Neue',
       backgroundColor: 'whitesmoke'
   }})
    return (
        <View style={style.container}>
          {console.log(this.props.navigation)}
          <Text style={[{fontSize: ((deviceHeight/deviceWidth) *15), textShadowColor: '#e8dec7', textShadowRadius:2, textAlign: 'left' } ,style.primary]}>Log in to Rate Me</Text>
        <TextInput placeholder='Username'style={{borderBottomWidth : 1.0,  width: (deviceWidth/2), marginBottom: 15, marginTop: 30, borderColor: '#C4C5C8', fontSize: ((deviceHeight/deviceWidth) *9)}}></TextInput>
        <TextInput placeholder='Password'style={{borderBottomWidth : 1.0,  width: (deviceWidth/2), marginBottom: 30, marginTop: 15,borderColor: '#CBCCD0', fontSize: ((deviceHeight/deviceWidth) *9)}}></TextInput>
        <TouchableOpacity style={{paddingBottom: 12, paddingTop: 12, backgroundColor: third, alignItems:'center',
      justifyContent:'center', width: (deviceWidth/2), marginTop: 14, marginBottom: 16}}>
            <Text style={{color: secondary, fontSize: ((deviceHeight/deviceWidth) *8), fontWeight:'600', letterSpacing:1, textTransform: 'uppercase'}} onPress={()=>this.props.navigation.navigate('Home')}>Log in</Text>
          </TouchableOpacity>
          <Text style={{fontSize: ((deviceHeight/deviceWidth) *6), paddingTop: 15}}>Forgot Password?</Text>
       <View style={{top:  deviceHeight/4.5, fontSize: ((deviceHeight/deviceWidth) *6)}}><Text>Don't have an account? <Text style={{fontWeight: '700'}}  onPress={()=> this.props.navigation.navigate('RegisterOne')}>Sign Up</Text></Text></View>
        </View>
    
    )
  }
}
 