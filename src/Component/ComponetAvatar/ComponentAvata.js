import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, KeyboardAvoidingView,
  } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class ComponentAvata extends Component {
    render() {
        return (
            <View style={styles.componentAvatar}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/53720111_2257822364535510_5124054189248348160_o.jpg?_nc_cat=110&_nc_eui2=AeE5KAxCKGwX-RnictH_v4cVaa4eJ6iPf4jswuI8iwlfnVyZJeNH53CgzeIn4N2NVhz_G5nihGYWpNRsJpV2BNXLnZqLlfI7Dy5TwIHCbnG9xQ&_nc_oc=AQnFROo2lg6gGKkNzL6ePj-ggPfMkQeXnQ2FBUKXR1w06d1kljpJIIyLjvX5hVjCXho&_nc_ht=scontent.fpnh2-1.fna&oh=8a322dd9064432b5c27dfc733e904494&oe=5E4F6B6B',
              }}
            />
            <Text style={styles.componentAvatar_text}> what's on your mind?</Text>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    componentAvatar: {
      // flex:1,
      flexDirection: "row",
      // backgroundColor:'red',
      marginLeft: 10,
      marginTop: 10
  
  
    },
    componentAvatar_text: {
      marginTop: 10,
      marginLeft: 4,
      color: 'blue'
    }
  })