import React, { Component, useReducer } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import RBSheet from "react-native-raw-bottom-sheet";

class ComponentDetail extends Component {
    render() {
        const renderItem = ({ item }) => (
            <View>
                <ListItem
                    title={item.userName}
                    subtitle={item.time}
                    titleStyle={{fontWeight: 'bold' }}
                    leftAvatar={{
                        source: { uri: item.profile }
                    }}
                    rightIcon={<Icon name='more-horizontal' type='feather' onPress={() => this.RBSheet.open()} />}
                    bottomDivider
                    chevron
                />
            </View>
        )
        const renderItem2 = ({ item }) => (
            <View>
                <ListItem
                    title={item.userName}
                    titleStyle={{fontWeight: 'bold' }}
                    subtitle={item.time}
                    leftAvatar={{
                        source: { uri: item.profile }
                    }}
                    rightIcon={<Icon name='more-horizontal' type='feather' onPress={() => this.RBSheet.open()} />}
                    
                />
                <Text style={styles.textStyle}>{item.des}</Text>
                <Image style={styles.imageStyle} source={{ uri: item.profile }} />
            </View>
        )
        return (
            <View style={styles.container}>

                {/* {this.props.Users.map(user => (
                    <View>
                        <ListItem
                            title={user.userName}
                            subtitle={user.time}
                            leftAvatar={{ source: { uri: user.profile } }}
                            rightIcon={<Icon name='more-horizontal' type='feather' onPress={() => this.RBSheet.open()} />}
                        />
                        <Text style={styles.textStyle}>{user.des}</Text>
                        <Image style={styles.imageStyle} source={{ uri: user.profile }} />
                    </View>
                ))} */}
                <FlatList data={this.props.Users}
                    renderItem={renderItem2}
                    keyExtractor={item => item.id}

                />



                <RBSheet ref={ref => { this.RBSheet = ref; }} height={450} width={300} duration={250}  >
                    <Icon name='more-horizontal' type='feather' onPress={() => this.RBSheet.close()} />
                    <FlatList data={this.props.Users}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}

                    />



                </RBSheet>

            </View>

        )
    }
}
export default withNavigation(ComponentDetail);
const styles = StyleSheet.create({
    container: {
        marginTop: 11
    },
    imageStyle: {
        width: deviceWidth,
        height: 250
    },
    textStyle: {
        marginLeft: 10,
        marginRight: 10
    }
})
const deviceWidth = Dimensions.get('window').width