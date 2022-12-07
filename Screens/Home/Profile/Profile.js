import {Component} from 'react'
import {Text, View, Image, ScrollView} from 'react-native'
import styles from '../../../styles/styles'
import { Link } from '@react-navigation/native';

export default class Profile extends Component {
render(){
let dummydata = {
    title: "joesnuffy",
    bio: "Dude this is just a test",
    username: "@joesnuffles369",
    profilepic: "https://images.unsplash.com/photo-1670264736611-7d9866f51c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    low_rating: 4.7,
    high_rating: 23,
    followers: 1000,
    following: 7,
    votes: 567,
    accounttype: 'business'
}

    return(
             <View style={styles.profilecontainer}>
                <View style={styles.profilectn}>
                <Text style={styles.profilename}>{dummydata.title}</Text>
                    <Image styles={styles.profile} source={{uri: "https://images.unsplash.com/photo-1634983707236-fb45a8ef1063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}}/>
                {/*    
            <Text styles={styles.profilename}>{dummydata.username}</Text>
            <Text>New York, USA</Text>
            <View styles={{flexDirection: 'row'}}>
                    <Text style={styles.profilenum}>{dummydata.followers}</Text>
                    <Text style={styles.profilenum}>followers</Text>
            </View> 
            */}
                </View>
                <ScrollView></ScrollView>
             </View>
           )
}

}
