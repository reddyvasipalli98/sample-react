import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity = {0.2} onPress = {() => props.onDelete(props.id)}>
            <View>
                <Text style={styles.listItem}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
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