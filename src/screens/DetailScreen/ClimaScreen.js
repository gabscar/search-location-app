
import React, { useEffect, useState } from 'react'
import { Text, View,ActivityIndicator,StyleSheet  } from 'react-native'
import {useSelector } from 'react-redux';
import {colors} from '../../utils/index'
import Picker from '../../components/TempContainer/Picker'
import WeatherInfo from '../../components/TempContainer/WeatherInfo'
import ReloadIcon from '../../components/TempContainer/ReloadIcon'
import WeatherDetails from '../../components/TempContainer/WeatherDetails'
import { ScrollView } from 'react-native-gesture-handler';
const BASE_API_KEY = '431418e1b338e897140df877824108ee';

const URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function ClimaScreen(){
    const {PRIMARY_COLOR} = colors;
    const [errorMessage, setErrorMessage] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [units, setUnits] = useState("metric");
    const AtualCity = useSelector((state)=>state.city.cityList[0])
    useEffect(()=>{
        Load()
    },[units])

    async function Load(){
        setCurrentWeather(null);
        setErrorMessage(null);
        try{
            
            const{lat,lng}=AtualCity.geometry;
            const weatherUrl = `${URL}lat=${lat}&lon=${lng}&units=${units}&appid=${BASE_API_KEY}`;
            const response = await fetch(weatherUrl);
            console.log(response)
            const result = await response.json();
            
            if (response.ok) {
                setCurrentWeather(result);
            } else {
                setErrorMessage(result.message);
        }
        }catch(err){
            setErrorMessage(err.message)
        }  
    }
    if (currentWeather) {
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Picker
                            units={units}
                            setUnits={setUnits}
                        />
                        <ReloadIcon load={Load} />
                        <WeatherInfo currentWeather={currentWeather} />
                    </View>
                    <WeatherDetails currentWeather={currentWeather} units={units}/>
                </View>
          </ScrollView>
        );
    }else if (errorMessage) {
        return (
          <View style={styles.container}>
            <ReloadIcon load={load}/>
            <Text style={{textAlign:'center'}}>{errorMessage}</Text>
          </View>
        );
    }else {
        return (
            <View style={styles.container}>
            <ActivityIndicator size='large' color={PRIMARY_COLOR} />
            
            </View>
        );
    }
}

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
      },
      main: {
        flex: 1,
        justifyContent: "center",
      },
      scrollContainer:{
        flex:1,  
        height:'100%',
        marginTop:15
      }
    
})