import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Component that displays as a line between todos
function Separator() {
    return (
        <View style={styles.separator}></View>
    );
}

interface Todo {
    key: string;
    todo: string;
}

export function TodoListScreen() {
    const [todos, setTodos] = useState<Todo[]>([
        { key: '1', todo: 'Do homework' },
        { key: '2', todo: 'Workout!' },
        { key: '3', todo: 'Pick up groceries' },
        { key: '4', todo: 'Learn React Native' },
    ]);

    const deleteTodo = (key: string) => {
        setTodos(
            todos.filter((todo: Todo) => todo.key !== key)
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List ({todos.length})</Text>

            <FlatList
                data={todos}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.todoTitle}>
                            {item.todo}
                        </Text>

                        <TouchableOpacity onPress={() => deleteTodo(item.key)}>
                            <Text>Complete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginLeft: 20,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    listItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    todoTitle: {
        fontSize: 15,
        flex: 1,
    },
    separator: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
});

