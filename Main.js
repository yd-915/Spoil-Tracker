import React from 'react'
import {Text, StyleSheet, ImageBackground} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import AgendaScreen from './calendar'
import HelpScreen from './Help'
import NotifScreen from './Notif'
import SheetScreen from  './Sheet'
function MainScreen() {
  const navigation = useNavigation();
   return(
    <ImageBackground style={{flex:1, resizeMode: 'cover'}} source={require('./new.png')}>
    <Text 
     style={{fontSize:50, color:'#15E5E8', justifyContent: 'center', alignItems:'center', marginLeft:110, marginTop:100, letterSpacing: 10}}>HOME</Text>
    <Text 
     style={{fontSize:27, color:'#15E5E8', justifyContent: 'center', alignItems:'center', marginLeft:35, marginTop:60}}>
     With Spoil Tracker, You keep 
track of food items so you 
don't ruin your stomach.
 In the Sheet page,
you can schedule dates with Google Calendar. In the Notif 
page, set notifications
 to notify you when dates are
close. If you have 
questions send 
an email (see Help page).
      </Text>
<Text 
     style={{fontSize:15, color:'#15E5E8', justifyContent: 'center', alignItems:'center', marginLeft:75, marginTop:140}}>Don’t forget to rate us in the App Store!</Text>
     </ImageBackground>
   )
}

const Tab = createBottomTabNavigator(); 
function MyTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Main' component={MainScreen} style={styles.tab}/>
            <Tab.Screen name="Date" component={AgendaScreen} style={styles.tab}/>
            <Tab.Screen name="Notif" component={NotifScreen} style={styles.tab}/>
            <Tab.Screen name="Sheet" component={SheetScreen} style={styles.tab}/>
            <Tab.Screen name="Help" component={HelpScreen} style={styles.tab}/>
        </Tab.Navigator>
    )
}

export default function App() {
    return(

        <MyTabs/>
    )
}
const styles = StyleSheet.create({
    touch: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 60,
        marginTop: -500,
        marginRight: 40,
        margin:15,
        width: "70%",
        backgroundColor: "black",
        borderRadius: 25,
        height:50,
        borderColor: '#15E5E8'
       },
       tab: {
        flex:1,
        color: 'white',
        backgroundColor: 'transparent'

      },
})