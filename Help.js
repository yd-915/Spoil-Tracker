import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

export default function HelpScreen() {
      return(
       <LinearGradient
       colors={['#4221AE', '#F51E29']}
       style={{flex:1, backgroundColor:'#F51E29'}}>
         <View style={styles.container}>
           <Text style={{fontSize:50, color:'white', justifyContent:'center', textAlign:'center',letterSpacing: 10,marginTop: 45,}}>FAQ</Text>
           <Text style={styles.bold}>Does this app contain any ads?</Text>
           <Text style={styles.light}>Yep no ads here. No one likes ads.</Text>
           <Text style={styles.bold}>Are all features available offline?</Text>
           <Text style={styles.light}>Yep. This app is fully functional offline.</Text>
           <Text style={styles.bold}>But if I forget to check my dates?</Text>
           <Text style={styles.light}> See Notif page for more information.</Text>
           <Text style={styles.bold}>More questions? Email us at y.dideh@yahoo.com</Text>
          

   
         </View>
       </LinearGradient>
      )
    }

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bold:{
    marginTop: 10,
    flex:1,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight:20,
    color: 'white'
  },
  light:{
    flex:1,
    fontSize: 20,
    fontWeight: 'normal',
    justifyContent:'center',
    alignItems:'center',
    marginRight:30,
    color: 'white'
    
  }
})