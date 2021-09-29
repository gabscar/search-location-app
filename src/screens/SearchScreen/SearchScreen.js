import React, { useEffect,useState } from 'react'
import { Text, TextInput, View} from 'react-native'
import { Button,Icon } from 'react-native-elements'
import { styles } from './styles'
import * as Location from 'expo-location'
import {useDispatch,useSelector } from 'react-redux';
import {CityActions} from '../../store/city-slice';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/CardSearch/Card';


export default function SearchScreen({navigation}){
    const [errorMessage, setErrorMessage] = useState(null);
    const [city, setCity] = useState("");
    const [color,setColor]= useState('#E3E6E8');
    const recentSearch= useSelector((state)=>state.city.cityList)
    const dispatch = useDispatch();

   

    async function handleSearchPosition(url){
        try{
            const response = await fetch(url);
            const result = await response.json();
            const {components} = result.results[0];
            const {geometry} = result.results[0];
            
            const {city, country, country_code} = components;
            dispatch(CityActions.addCity({components,geometry}));

            
            setCity('');
            navigation.push("Details")
        }catch(err){
            setErrorMessage('Localização inválida');
            setColor('red');
        }
    }

    function handleSubmit(){

        if(city===""){
            setErrorMessage('O local não pode estar vazio');
            setColor('red');
            return;
        }
        setErrorMessage(null);
        setColor('#E3E6E8');
        let url = `https://api.opencagedata.com/geocode/v1/json?key=e85809527b0341b18712ec1bacc3aab9&q=${city}`
        handleSearchPosition(url)
    }

    async function handleGetMyCurrentPosition(){
        let { status } = await Location.requestBackgroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMessage("Access to location is needed to run the app");
            return;
        }
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=4b07849320724fcab06079515b162e5e`;
        handleSearchPosition(url);
    }
    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>Type Your Location Here</Text>
            <TextInput 
                style={styles.Input}
                value={city}
                onChangeText ={city=>setCity(city)}
                placeholder="Local"
                borderColor={color}
            
            />{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <View style = {styles.ButtonsView}>
                <Button buttonStyle = {styles.Button}
                        title= "Submit"
                        titleStyle={styles.titleButton}
                        onPress = {handleSubmit}
                />
                <Button buttonStyle = {styles.Button}
                        titleStyle={styles.titleButton}
                        onPress={handleGetMyCurrentPosition}
                        icon = {
                            <Icon
                                name="gps-fixed"
                                color="#fff" 
                                size={20}
                            />
                        }
                />
            </View>
            <ScrollView style={styles.scrollCity}> 
                <Text style={styles.scrollTitle}>Previous Searches</Text>
                    {recentSearch.map((city)=>(
                        <Card props={city} navigation ={navigation} />
                    ))}
            </ScrollView>
        </View>
    )
}