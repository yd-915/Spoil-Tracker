import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AgendaScreen from './calendar'
import NotifScreen from './Notif'
import MainScreen from './Main'
import EventScreen from './Event'
function HomeScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./home.png')}>
       
       <Text
         style={{fontSize:50, color:'white', justifyContent:'center', alignItems:'center', marginLeft:65, marginTop: 150}}>
           Spoil Tracker
         </Text>
         <Text
         style={{fontSize:30, color:'rgb(255,228,196)', justifyContent:'center', alignContent:'center', marginBottom:900, marginLeft:50}}>
           Don't eat spoiled again!
         </Text>
         <TouchableOpacity
             style={styles.kouch}
             onPress={() => navigation.navigate("New")}>
          <Text
         style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'white', marginLeft:1, }}>
           FEEBACK
         </Text>   
           </TouchableOpacity>
        <TouchableOpacity
             style={styles.pouch}
             onPress={() => navigation.navigate("Slider")}>
          <Text
         style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'white', marginLeft:1, }}>
           EXPLORE
         </Text>   
           </TouchableOpacity>
           <TouchableOpacity
             style={styles.touch}
             onPress={() => navigation.navigate("Main")}>
          <Text
         style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'white', marginLeft:1, }}>
           WELCOME
         </Text>   
           </TouchableOpacity>
           </ImageBackground>
  )
}
function SliderScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./slider1.png')}>
     <TouchableOpacity
             onPress={() => navigation.navigate("Show")}>
          <Text
         style={{fontSize:20, justifyContent: 'center', alignItems: 'center', color:'purple', marginTop: 740, marginLeft:187 }}>
           Next
         </Text>   
           </TouchableOpacity>
    </ImageBackground>
  )
}
function ShowScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./slider2.png')}>
     <TouchableOpacity
             onPress={() => navigation.navigate("End")}>
          <Text
         style={{fontSize:20, justifyContent: 'center', alignItems: 'center', color:'purple', marginTop: 740, marginLeft:187}}>
           Next
         </Text>   
           </TouchableOpacity>
    </ImageBackground>
  )
}
function EndScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./slider3.png')}>
     <TouchableOpacity
             onPress={() => navigation.navigate("Main")}>
          <Text
         style={{fontSize:20, justifyContent: 'center', alignItems: 'center', color:'purple', marginTop: 740, marginLeft:187 }}>
           Next
         </Text>   
           </TouchableOpacity>
    </ImageBackground>
  )
}
function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate("Home")
  },3000)
  return(
     <ImageBackground style={{flex:1}} source={require('./start.png')}/>
  )
}



const Stack = createStackNavigator();
function MyStack() {
  return(
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
    <Stack.Screen name="Splash" component={SplashScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Date" component={AgendaScreen}/>
    <Stack.Screen name="Slider" component={SliderScreen}/>
    <Stack.Screen name="Show" component={ShowScreen}/>
    <Stack.Screen name="End" component={EndScreen}/>
    <Stack.Screen name="Note" component={NotifScreen}/>
    <Stack.Screen name='Main' component={MainScreen}/>
    <Stack.Screen name='New' component={EventScreen}/>
    </Stack.Navigator>
  )
  
}

export default function App() {
  return(
    <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: -220,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "green",
    borderRadius: 25,
    height:50
   },
   lift: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pouch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: 10,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "green",
    borderRadius: 25,
    height:50
   },
   kouch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: -500,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "green",
    borderRadius: 25,
    height:50
   },
});   