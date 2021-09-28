
import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
export default function DetailScreen({route}){

    const AtualCity = useSelector((state)=>state.city.cityList[0])
    const {city,state,country,country_code,continent,town}=AtualCity.components;
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textCity}>{city||town} - {state}</Text>
                <Text style = {styles.text}>{country} - {country_code.toUpperCase()}</Text>
                <Text style = {styles.text}>{continent}</Text>
            </View>
         </View>
    )
}


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
    },
    card:{
        backgroundColor:'#DBDBDB',
        width:300,
        height:200,
        borderRadius:12,
    },
    textCity:{
        marginTop:50,
        marginLeft:10,
        marginRight:10,
        fontSize:20,
        fontWeight:'bold',
        borderBottomWidth:1,
        borderBottomColor:'#626262'
    },
    text:{
        marginTop:5,
        marginLeft:10,
        fontSize:19,
        borderBottomWidth:1,
        borderBottomColor:'#626262',
        fontStyle:'italic'
    },
     
    
})