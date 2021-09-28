import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { Text, View } from 'react-native';

const SearchStack = createStackNavigator();




export default function Routes(){
    
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name ="Home" component={SearchScreen} options={{ title: 'Search' }}/>
        </SearchStack.Navigator>
    )
}

const InternalNavigation = ()=>{
    const Tabs = createBottomTabNavigator();
} 