import React, { Component } from 'react'
import { Header } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

export default class HeaderMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ text: 'Menu', style: { color: '#66103178', fontSize: 30, width: 2000,fontWeight: 'bold' } }}
                    rightComponent={ <Icon name="user-circle" type="font-awesome" size={26} color="#006699" />}
                   
                    backgroundColor="white"
                />
            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        // flex:1
    }
})