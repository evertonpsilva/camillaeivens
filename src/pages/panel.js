// Main.js
import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';

export default class Panel extends React.Component {
    state = { currentUser: null }

    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>
                Hi {currentUser && currentUser.email}!
                </Text>
            </View>
            )
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 