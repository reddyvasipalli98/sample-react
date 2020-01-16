import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.textStyler} />
        <Button title="ADD" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyler: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%'
  }
});


    // <View style={{padding:50, flexDirection:'row',height:300, justifyContent:'space-around', alignItems:'center'}}>
    //   <View 
    //     style ={ {backgroundColor: 'red',
    //               flex:1,
    //               justifyContent: 'center',
    //               alignItems:'center'}}>
    //     <Text>1</Text>
    //   </View>
    //   <View 
    //     style ={ {backgroundColor: 'blue',
    //               flex:1,
    //               justifyContent: 'center',
    //               alignItems:'center'}}>
    //     <Text>2</Text>
    //   </View>
    //   <View 
    //     style ={ {backgroundColor: 'green',
    //               flex:1,
    //               justifyContent: 'center',
    //               alignItems:'center'}}>
    //     <Text>3</Text>
    //   </View>
    // </View>