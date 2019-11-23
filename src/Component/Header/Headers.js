import React, { Component } from 'react'
import { Header } from 'react-native-elements';
import {View, StyleSheet} from 'react-native'

export default class Headers extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ text: 'Facebook', style: { color: '#66103178', fontSize: 30, width: 2000,fontWeight: 'bold' } }}
                    rightComponent={{ icon: 'search', color: 'black' }}
                    rightComponent={{ icon: 'search', color: 'black' }}
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