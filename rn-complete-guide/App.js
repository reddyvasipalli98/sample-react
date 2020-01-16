import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [currentGoals, setCurrentGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCurrentGoals(currentGoals => ([...currentGoals, enteredGoal]));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textStyler}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {currentGoals.map((goal) => <View key={goal}><Text style={styles.listItem}>{goal}</Text></View>)}
      </ScrollView>
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
  },
  listItem:{
    padding:10,
    backgroundColor:'grey',
    borderColor:'black',
    borderWidth:1,
    marginVertical:5
  },
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