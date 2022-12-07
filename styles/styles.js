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
        height: (deviceHeight * .4)
      },
      profile:{
        height: '20%',//(deviceHeight * 1.2),
        width: '20%',//(deviceWidth * 1.2),
        borderRadius: 25,
        bottom:"10%"
      },
      profilename:{
        fontSize: ((deviceHeight/deviceWidth) *12) , fontWeight: '700', top: "15%"
      },
      profilenum:{
        color: 'red', fonstsize: 16, fontWeight: '500'
      },
      profilenumtwo:{
        color: 'red', fonstsize: 16, fontWeight: '500'
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