import React from 'react'
import {ImageBackground, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native'

export default function EventScreen() {
  return(
    <ImageBackground style={{flex:1}} source={require('./feedback.png')}>
    <Text 
      style={{fontSize: 19, justifyContent: 'center', alignItems: 'center', marginTop: 300, marginLeft:65, color: 'white'}}>Thank you for using Spoil Tracker!</Text>
    <Text 
      style={{fontSize: 16, justifyContent: 'center', alignItems: 'center', margin: 15, color:'white'}}>If you have any questions, suggestions or 
comments, send it at y.dideh@yahoo.com.
You can also follow me on Instagram to 
get news on my upcoming projects. 
And don’t forget to rate the app, helps a lot! </Text>
<Text 
      style={{fontSize: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 125, color:'white'}}>Thanks again!</Text>
    <TouchableOpacity
              style={styles.slouch}
              onPress={() => Linking.openURL("https://www.instagram.com/yd915_official/")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Follow Me 
          </Text>   
            </TouchableOpacity>
    <TouchableOpacity
              style={styles.mouch}
              onPress={() => Linking.openURL("market://details?id=com.squad.et")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Rate App
          </Text>   
            </TouchableOpacity>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    slouch: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 60,
        marginTop: 180,
        marginRight: 40,
        margin:15,
        width: "70%",
        backgroundColor: "white",
        borderRadius: 25,
        height:50
       },
       mouch: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 60,
        marginTop: -150,
        marginRight: 40,
        margin:15,
        width: "70%",
        backgroundColor: "white",
        borderRadius: 25,
        height:50
       },
})