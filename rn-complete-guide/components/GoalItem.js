import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return <View>
        <Text style={styles.listItem}>{props.title}</Text>
    </View>
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5
    },
})
export default GoalItem;