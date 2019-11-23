import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class ComponentNavigation extends Component {
    render() {
        console.log("hoell",this.props)
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name="home" type="materialIcons" size={26} color="#006699" /><Text style={{ marginTop: 10 }}></Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name="live-tv" type="materialIcons" size={26} color="#006699" /><Text style={{ marginTop: 10 }}></Text>
                </View>
                <View style={{flex:1, flexDirection: 'row', marginRight: 10 }}>
                    <Icon name="user-circle" type="font-awesome" size={26} color="#006699" /><Text style={{ marginTop: 10 }}></Text>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <Icon name="dehaze" type="materialIcons" size={26} color="#006699" onPress={()=>this.props.navigation.navigate('Details')}/><Text style={{ marginTop: 10 }}></Text>
                </View>

            </View>
        )
    }
}
export default withNavigation(ComponentNavigation)
const styles = StyleSheet.create({
    container: {
        //   flex:1,
        // justifyContent:'space-between',
        // alignContent:'center',
        flexDirection: "row",
        marginTop: 13,
        marginLeft: 10,
    }
})
