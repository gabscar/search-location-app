import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { Text, View } from 'react-native';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import ClimaScreen from '../screens/DetailScreen/ClimaScreen';

import  Icon  from 'react-native-vector-icons/FontAwesome5'

export default function Routes(){
    const SearchStack = createStackNavigator();
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name ="Home" component={SearchScreen} options={{ title: 'Search' }}/>
            <SearchStack.Screen name ="Details" component={InternalTabNavigation} options={{ title: 'Details' }}/>
        </SearchStack.Navigator>
    )
}
//city cloud-sun
const InternalTabNavigation = ()=>{
    const Tabs = createBottomTabNavigator();

    return(
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'About') {
                iconName = 'city'
                color = focused ? 'black': 'gray';
                size=25.33
              }if (route.name === 'Clima') {
                iconName = "cloud-sun";
                color = focused ? 'black': 'gray';
                size=27.5
              }
      
              // You can return any component that you like here!
              return <Icon name = {iconName} size={size} color={color}/>
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            width:49,
            height:41,
            iconStyle:{
             flex:1
            },
            showIcon: true,
            labelStyle:{
              fontSize:14,
              fontWeight:'bold',
              padding:14,       
            },
            style:{
                borderTopLeftRadius:21, 
                borderTopRightRadius:21,
                backgroundColor:"#fff",
                position:'absolute',      
                height: 80,
                paddingTop:46, 
                bottom:1, 
            }
            
          }}
        >
            <Tabs.Screen name="About" component={DetailScreen}/>
            <Tabs.Screen name="Clima" component={ClimaScreen}/>
        </Tabs.Navigator>
    )
} 