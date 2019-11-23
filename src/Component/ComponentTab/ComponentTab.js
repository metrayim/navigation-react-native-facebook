import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Avatar, Icon, Input, Button, Header } from 'react-native-elements';

export default class ComponentTab extends Component {

  render() {
    
    return (

      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row'}}>
            <Icon name="videocam" type="materialIcons" size={20} color="#006699"/><Text style={{marginTop:2}}>Live</Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <Icon name="insert-photo" type="materialIcons" size={20} color="#006699"/><Text style={{marginTop:2}}>Photo</Text>
        </View>
        <View style={{flexDirection:'row',marginRight:10}}>
            <Icon name="place" type="materialIcons" size={20} color="#006699"/><Text style={{marginTop:2}}>Check in</Text>
        </View>

      </View>


    )
  }
}
const styles = StyleSheet.create({
  container: {
      //  flex:1,
    // justifyContent:'space-between',
    // alignContent:'center',
    flexDirection:"row",
    marginTop:13,
    marginLeft:10,
  }
})
