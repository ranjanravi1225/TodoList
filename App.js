import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import AddTodos from './components/addTodos';

export default function App() {

  const [Todos, setTodos] = useState([
    
  ]);


    const addInput = (text) => {
      if(text.length > 0)
      {
          setTodos((prevTodos) => {
            return [
              
              { text: text, key: Math.random().toString() },
              ...prevTodos,
            ]
          })
      } 
      else {
        Alert.alert('error!', 'List name cannot be empty', [
          { text: 'OK', onPress: () => console.log('alert closed')}
        ]);
      }
      
    }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}> 
        <AddTodos  addInput={addInput} />
          <View style={styles.list}> 
            <FlatList
              data={Todos}
              renderItem = {( { item }) =>(
                <Text style={styles.item}> {item.text} </Text>
              )}
            /> 
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 10,
  },
  item: {
    padding: 8,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  }

});
