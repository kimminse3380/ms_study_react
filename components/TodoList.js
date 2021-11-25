import React from "react";
import {StyleSheet, ScrollView, Text} from 'react-native'

const Todolist = () => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <Text>TodoList</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default Todolist;