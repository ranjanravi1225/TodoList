import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodos({ addInput }) {

    const [text, setText] = useState('');

    const textInput = (val) => {
        setText(val);
    }


    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter the list name you want to add"
                onChangeText={textInput}
                value={text}
            />
            <Button onPress={() => { 
                setText('')
                addInput(text)}} title='Add Todos' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        padding: 8,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    },
});