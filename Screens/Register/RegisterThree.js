import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import DatePicker from 'react-native-date-picker'
import {Picker} from '@react-native-picker/picker'

export default class RegisterThree  extends Component {
  constructor(props){
  super(props)
  this.state = { date: new Date(),
    selected: undefined
      }
  this.setDate = this.setDate.bind(this)
}
setDate(newDate) {
  this.setState({date: newDate});
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
      
       alignItems:'center',
       justifyContent:'center',
       fontFamily: 'Helvetica Neue',
       backgroundColor: 'whitesmoke'
   },
   fontSize: 100,
  })

    return (
      
    <>
        <View style={{flex:2}}></View>
          <View style={{flex:2, alignItems: 'center'}}>
            <Text style={{fontSize: ((deviceHeight/deviceWidth) *10)}}>Select your birthday.</Text>
            <DatePicker 
              style={{width: deviceWidth, height: deviceHeight/4,}}
              mode='date'
              date={this.state.date}
              onDateChange={(date)=> this.setDate(date)}
              maximumDate={new Date(Date.now())}
              />
         
            <TouchableOpacity style={{ backgroundColor: third, alignItems:'center', top: deviceHeight/10, paddingTop: 10, paddingBottom: 10,
            justifyContent:'center', width: (deviceWidth/2)}}>
              <Text style={{color: secondary, fontSize: ((deviceHeight/deviceWidth) *7.5), fontWeight:'700', letterSpacing:1, textTransform: 'uppercase'}}>Next</Text>
            </TouchableOpacity> 
          </View>
          <View style={{flex:3}}></View>
      </>
    
    )
  }
}
