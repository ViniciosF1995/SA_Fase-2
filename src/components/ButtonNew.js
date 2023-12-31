import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({focused, size}) {
    return (
        <View style={[styles.container, {backgroundColor: focused ? '#40916c' : '#52b788' } ]}>
            <Entypo
                name="plus"
                color={focused ? '#FFF' : '#F8F8F8'}
                size={size}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30,
    }
})