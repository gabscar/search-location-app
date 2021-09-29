import React from 'react'
import { Text, View} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import {useDispatch,useSelector } from 'react-redux';
import {CityActions} from '../../store/city-slice';

import {styles} from './styles'

export default function Card({props,navigation}){
    const dispatch = useDispatch()
    function handleClickButton(){
        const {components,geometry}=props;
        dispatch(CityActions.addCity({components,geometry}));
        
        navigation.push("Details");
    }
    console.log(props)
    return(
        <View style = {styles.card}>
            
            <View style = {styles.cardText}>
                <Text style={styles.title}>{(props.components.city? props.components.city:
                                            props.components.town?props.components.town:props.components.state
                                            )}
                </Text>
                <Text style={styles.subtitle}>{props.components.country_code.toUpperCase()}, {props.components.country}</Text>
            </View>
            <Button
                buttonStyle={styles.Button}
                onPress = {handleClickButton}
                icon={
                    <Icon
                        name = 'arrow-right' 
                        type='feather' 
                        color="red" 
                        size={25} 
                    />
                }
            />
        
        </View>
    )
}