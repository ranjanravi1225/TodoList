import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}> Todos List </Text>
        </View>
    )

}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height: 80,
        padding: 38,
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },

});
