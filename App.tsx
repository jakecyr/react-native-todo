import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './pages/HomeScreen';
import { TodoListScreen } from './pages/TodoListScreen';

const RootStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                ></RootStack.Screen>

                <RootStack.Screen
                    name="TodoList"
                    component={TodoListScreen}
                    options={{
                        headerShown: false,
                    }}
                ></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
