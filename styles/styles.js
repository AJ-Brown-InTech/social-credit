import { StyleSheet, Dimensions } from "react-native";

//default device width + height 
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const styles =  StyleSheet.create({
    container: {
    flex: 3,
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
        width: (deviceWidth / 2),
        padding: 1,
        fontSize: ((deviceHeight/deviceWidth) * 9),
        marginTop: '15',
        marginBottom: '15'
    },
    forgot:{
        fontSize: ((deviceHeight/deviceWidth) * 7)
    },
        image: {
            width: deviceWidth,
            height: deviceHeight,
            justifyContent: 'space-between'
            
          }
})      

export default styles