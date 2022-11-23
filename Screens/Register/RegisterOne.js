import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity } from "react-native";

export default class RegisterOne extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedAccount : undefined,
      accounts: ['Business', 'Creator', 'Normee']
    }
  }
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
         <Text style={[{fontSize: ((deviceHeight/deviceWidth) *22), textShadowColor: '#e8dec7', textShadowRadius:2, textAlign: 'left' } ,style.primary]}>Sign Up</Text>
        <TextInput type='text' placeholder='Phone or Email'style={{borderBottomWidth : 1.0,  width: (deviceWidth/1.7), marginTop:40,borderColor: '#C4C5C8', fontSize: ((deviceHeight/deviceWidth) *9)}}></TextInput>

       <TextInput placeholder='Password'style={{borderBottomWidth : 1.0,  width: (deviceWidth/1.7), marginTop:40,marginBottom:40, borderColor: '#C4C5C8', fontSize: ((deviceHeight/deviceWidth) *9)}}></TextInput>
       
     <TouchableOpacity style={{paddingBottom: 12, paddingTop: 12, backgroundColor: third, alignItems:'center',
      justifyContent:'center', width: (deviceWidth/2)}} onPress={()=>this.props.navigation.navigate('RegisterTwo')}>
            <Text style={{color: secondary, fontSize: ((deviceHeight/deviceWidth) *8), fontWeight:'600', letterSpacing:1, textTransform: 'uppercase'}}>Continue</Text>
          </TouchableOpacity>
       <View style={{top:  deviceHeight/5}}><Text>Already have an account? <Text style={{fontWeight: '700'}} onPress={()=>this.props.navigation.navigate('Login')}>Log In</Text></Text></View>
        </View>
    
    )
  }
}
