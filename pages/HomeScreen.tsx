import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function HomeScreen(props: any) {

    const goToList = () => {
        props.navigation.navigate('TodoList');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Welcome to</Text>
            <Text style={styles.title}>Todo Manager</Text>

            <TouchableOpacity onPress={() => goToList()} style={styles.button}>
                <Text>View Todo List</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F85252',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: 'white',
    },
    subtitle: {
        fontSize: 40,
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        color: '#F85252',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 40,
    },
});
