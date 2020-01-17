import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [currentGoals, setCurrentGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCurrentGoals(currentGoals => ([...currentGoals, { key: Math.random().toString(), value: goalTitle }]));
  };

  const removeGoalHander = goaldId => {
    setCurrentGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goaldId);
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        data={currentGoals}
        renderItem={itemData => <GoalItem id = {itemData.item.key} onDelete = {removeGoalHander} title = {itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  textStyler: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%'
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