import { StyleSheet, Dimensions } from "react-native";

//default device width + height 
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles =  StyleSheet.create({
    container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Helvetica Neue',
    margin:0,
    padding: 0,
    },
    containerthree: {
      flex: 3,
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center',
      fontFamily: 'Helvetica Neue',
      },
    green: {
        color:'#83cc9a',
        textShadowColor: '#83cc9a'
    },
    width: deviceWidth,
    height: deviceHeight,
    textinput: {
        borderBottomWidth: 1,
        width: (deviceWidth/1.5),
        padding: '2%',
        fontSize: ((deviceHeight/deviceWidth) * 8.5),
        marginTop: (15 * 2),
        marginBottom: 15,
        borderRadius: 20 ,
        borderColor: 'black'
    },
    input: {
      borderBottomWidth: 1,
      width: (deviceWidth/1.5),
      padding: '2%',
      fontSize: ((deviceHeight/deviceWidth) * 8.5),
      marginTop: (15 * 2),
      marginBottom: 15,
  },
    forgot:{
        fontSize: ((deviceHeight/deviceWidth) * 8),
        paddingTop: '2%'
    },
        image: {
            width: deviceWidth,
            height: deviceHeight,
            justifyContent: 'space-between',
          },
          title:{
            fontSize: ((deviceHeight/deviceWidth) *10), 
            fontWeight: '500', 
            textTransform: 'capitalize',
          },
          loginbtn:{
            paddingBottom: '4%', 
            paddingTop: '4%', 
            backgroundColor: '#83cc9a', 
            alignItems:'center',
            justifyContent:'center', 
            width: (deviceWidth/1.5), 
            marginTop: '4%' ,
            marginBottom: '4%'
             },
      loginbtntext:{
        fontSize: ((deviceHeight/deviceWidth) *10),
        fontWeight:'600',
        letterSpacing:1,
        textTransform: 'uppercase'
      },
      footer:{
        top:  deviceHeight/5,
      },
      footertxt:{
        fontSize: ((deviceHeight/deviceWidth) *8)
      },
      profilectn:{
        backgroundColor: '#83cc9a',
        alignItems:'center',
        borderColor: 'black',
        width: deviceWidth,
        height: (deviceHeight * .425),
        
      },
      profile:{
        height: (deviceHeight/8),
        width: (deviceWidth/4),
        borderRadius: 50,
        margin: '1.5%',
        top: '12%'
       
      },
      profilename:{
        fontSize: ((deviceHeight/deviceWidth) *12) ,
         fontWeight: '700',
         top: '12%',
         color: '#414a4c'
         
      },
      profileusername:{
        fontSize: ((deviceHeight/deviceWidth) *7) ,
        fontWeight: '500',
        top: '12%',
        color: '#414a4c'
      },
      profilenum:{
        color: '#343434', fonstsize: 16, fontWeight: '500'
      },
     
      profilecontainer: {
        flex: 2,
        alignItems:'center',
        justifyContent:'center',
        fontFamily: 'Helvetica Neue',
        margin:0,
        padding: 0,
        },

})      

export default styles