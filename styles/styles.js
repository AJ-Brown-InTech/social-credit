import { StyleSheet, Dimensions } from "react-native";

//default device width + height 
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles =  StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Helvetica Neue',
    },
    green: {
        color:'#99b9ad',
        textShadowColor: '#99b9ad'
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
      }
})      

export default styles