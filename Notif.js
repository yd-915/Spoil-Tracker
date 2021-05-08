import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

  export default function NotifScreen() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <LinearGradient
      colors={['#1C0CC2', '#D222D2']}
      style={{flex:1, background:'#D222D2'}}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop:200}}>
     <Text style={{fontSize:30, color:'rgb(255,228,196)', justifyContent:'center', alignItems:'center', marginLeft:35, marginTop:30}}>Set weekly reminders to check your dates so you don't end up eating spoiled!</Text>
     <Image 
      source={require('./light.png')}
      style={{justifyContent:'center', alignContent:'center', height: 300, width:300, marginTop:60}}></Image>
      </View>
      <TouchableOpacity
       style={{ width: "80%",
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 240,
                backgroundColor: "#1C0CC2",
                marginRight:0,
                marginBottom:120}}
        onPress={async () => {
          await schedulePushNotification();
        }}>
        <Text
          style={{fontSize:20, color:'rgb(255,228,196)', justifyContent:'center', alignContent:'center',marginLeft:7}}>Set Notification</Text>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder!",
      body: 'Check your calendar to see which items are expiring today',
    },
    trigger: { schedule, seconds: 604800, repeats:true },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}