import React, { Component } from 'react';
import { ScrollView, Card, View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';

export default class ComponentStory extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <Image style={styles.containerImage} source={{ uri: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/51211690_2234099193473015_3972786143971246080_n.jpg?_nc_cat=107&_nc_eui2=AeEj2OOSW2Bg_erEyihg5iQt1Lo1AetY1-yOhOdR89ullxjUBr6WhNVhX4LgCd4tMpzKuvN-kswkyegJGomCthf6Mjh_S4qWQGm9sV5zE0_SPA&_nc_oc=AQn-r4YQJHUK9E3VgHZ52_pf0F6U9Z8v1EfI-nNpggtv2KGytoBc4kDB4kLrDspsRQA&_nc_ht=scontent.fpnh8-2.fna&oh=c19e5d2ea57f92a84d6506f02a1e379d&oe=5E7F18B9' }} />
                        <View style={styles.iconStyle} >
                            <Icon type='font-awesome' color="#cccc" name='plus-circle' size={35} />
                        </View>
                        <Text style={styles.textStyle}>Add To Story</Text>
                    </View>
                    {
                        this.props.Users.map(user => (
                            <View key={user.id}>
                                <Image style={styles.containerImage} source={{ uri: user.profile }} />
                                <View style={styles.iconStyle} >
                                    <Avatar
                                        rounded
                                        source={{ uri: user.profile }}
                                    />
                                </View>
                                <Text style={styles.textStyle}>{user.userName}</Text>
                            </View>

                        ))
                    }
                    {/* <View>
                        <Image style={styles.containerImage} source={{ uri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/53720111_2257822364535510_5124054189248348160_o.jpg?_nc_cat=110&_nc_eui2=AeE5KAxCKGwX-RnictH_v4cVaa4eJ6iPf4jswuI8iwlfnVyZJeNH53CgzeIn4N2NVhz_G5nihGYWpNRsJpV2BNXLnZqLlfI7Dy5TwIHCbnG9xQ&_nc_oc=AQnFROo2lg6gGKkNzL6ePj-ggPfMkQeXnQ2FBUKXR1w06d1kljpJIIyLjvX5hVjCXho&_nc_ht=scontent.fpnh2-1.fna&oh=8a322dd9064432b5c27dfc733e904494&oe=5E4F6B6B' }} />
                        <View style={styles.iconStyle} >
                            <Avatar
                                rounded
                                source={{ uri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/53720111_2257822364535510_5124054189248348160_o.jpg?_nc_cat=110&_nc_eui2=AeE5KAxCKGwX-RnictH_v4cVaa4eJ6iPf4jswuI8iwlfnVyZJeNH53CgzeIn4N2NVhz_G5nihGYWpNRsJpV2BNXLnZqLlfI7Dy5TwIHCbnG9xQ&_nc_oc=AQnFROo2lg6gGKkNzL6ePj-ggPfMkQeXnQ2FBUKXR1w06d1kljpJIIyLjvX5hVjCXho&_nc_ht=scontent.fpnh2-1.fna&oh=8a322dd9064432b5c27dfc733e904494&oe=5E4F6B6B' }}
                            />
                        </View>
                        <Text style={styles.textStyle}>Metra Yim</Text>
                    </View>
                    <View>
                        <Image style={styles.containerImage} source={{ uri: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/43231352_2169058376643764_2432226828534939648_n.jpg?_nc_cat=102&_nc_eui2=AeFDq0S5ew8rLNFKbTh9c7LyGNV_5GtqSLzv8InFafpqlOU7irWsF8bKe5xn4-9HnqMwzlpQovj9Xrk0B_rYlcIwLkokYh7cBqO143RBycd7rA&_nc_oc=AQlIzBuLhVLlJWAKflYnfyvoZT46Ssy-hcRDUAA4SXdFnaMLwPLP3D4AQqIF52crvlY&_nc_ht=scontent.fpnh8-1.fna&oh=c26af2d58ff5558a4ba634c5589d1b2a&oe=5E84D0A2' }} />
                        <View style={styles.iconStyle} >
                        <Avatar
                                rounded
                                source={{ uri: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/43231352_2169058376643764_2432226828534939648_n.jpg?_nc_cat=102&_nc_eui2=AeFDq0S5ew8rLNFKbTh9c7LyGNV_5GtqSLzv8InFafpqlOU7irWsF8bKe5xn4-9HnqMwzlpQovj9Xrk0B_rYlcIwLkokYh7cBqO143RBycd7rA&_nc_oc=AQlIzBuLhVLlJWAKflYnfyvoZT46Ssy-hcRDUAA4SXdFnaMLwPLP3D4AQqIF52crvlY&_nc_ht=scontent.fpnh8-1.fna&oh=c26af2d58ff5558a4ba634c5589d1b2a&oe=5E84D0A2' }}
                            />
                        </View>
                        <Text style={styles.textStyle}>Jennie Jennifer</Text>
                    </View>
                    <View>
                        <Image style={styles.containerImage} source={{ uri: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/69885570_1110943555777007_1073322167040475136_n.jpg?_nc_cat=104&_nc_eui2=AeHbSKgNvn95IMTMEqzUEya8RYrX5BkBJs9TkJCg8sYFHkrRPG2OvzORsmv9-1QGkTM4TWoZmMygTnD9-RNbRM8fgbXZDdNoDaYB63WNbteyrQ&_nc_oc=AQlBm3jWUSSs16rhBvsHNHbuy7FZ5hvBf6itVtDvybyTpZ0yX_7jmhePtp5w6NVJlgQ&_nc_ht=scontent.fpnh8-2.fna&oh=7ffc5c9306d64c2307d4cd667fcbe45c&oe=5E5561C0' }}></Image>
                        <View style={styles.iconStyle} >
                        <Avatar
                                rounded
                                source={{ uri: 'https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/69885570_1110943555777007_1073322167040475136_n.jpg?_nc_cat=104&_nc_eui2=AeHbSKgNvn95IMTMEqzUEya8RYrX5BkBJs9TkJCg8sYFHkrRPG2OvzORsmv9-1QGkTM4TWoZmMygTnD9-RNbRM8fgbXZDdNoDaYB63WNbteyrQ&_nc_oc=AQlBm3jWUSSs16rhBvsHNHbuy7FZ5hvBf6itVtDvybyTpZ0yX_7jmhePtp5w6NVJlgQ&_nc_ht=scontent.fpnh8-2.fna&oh=7ffc5c9306d64c2307d4cd667fcbe45c&oe=5E5561C0' }}
                            />
                        </View>
                        <Text style={styles.textStyle}>Savady Keo</Text>

                    </View>
                    <View>
                        <Image style={styles.containerImage} source={{ uri: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/67331440_663620694115595_434327717404475392_n.jpg?_nc_cat=106&_nc_eui2=AeG6E_oxp-vZ85MJoZSjixbwBablmoOO7qs33_WJdhoDAHFvTCs5rm65jrY9Orl-WkW_1eGah_jxkTRZ17J2LEZwuU9yoZsR0EryqLW0kkrQKQ&_nc_oc=AQnY2D0GDFcZyxGKXYjREu31bEBiovxGUsqAn2k33T_ztipB4BFf6wenwBXn2snOAPc&_nc_ht=scontent.fpnh8-1.fna&oh=03a4499cf06c16e35544736c12905f1c&oe=5E843322' }}></Image>
                        <View style={styles.iconStyle} >
                        <Avatar
                                rounded
                                source={{ uri: 'https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/67331440_663620694115595_434327717404475392_n.jpg?_nc_cat=106&_nc_eui2=AeG6E_oxp-vZ85MJoZSjixbwBablmoOO7qs33_WJdhoDAHFvTCs5rm65jrY9Orl-WkW_1eGah_jxkTRZ17J2LEZwuU9yoZsR0EryqLW0kkrQKQ&_nc_oc=AQnY2D0GDFcZyxGKXYjREu31bEBiovxGUsqAn2k33T_ztipB4BFf6wenwBXn2snOAPc&_nc_ht=scontent.fpnh8-1.fna&oh=03a4499cf06c16e35544736c12905f1c&oe=5E843322' }}
                            />
                        </View>
                        <Text style={styles.textStyle}>Vann Da</Text>
                    </View> */}

                </ScrollView>
            </View>

        )
    }
}
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {

    },
    containerImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 15,
        position: 'relative'
    },
    iconStyle: {
        position: 'absolute',
        top: 30,
        left: 20
    },
    textStyle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'white',
        fontWeight: 'bold'
    }

})
