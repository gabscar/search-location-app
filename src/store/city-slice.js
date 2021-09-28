import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityList:[]
}
const citySlice = createSlice({
    name: 'citys',
    initialState: initialState,
    reducers:{
        addCity(state,action){
            const newCity = action.payload;
            state.cityList.unshift(newCity)
            if(state.cityList.length> 3){
                state.cityList.pop();
            }
        }
    }
})


export const CityActions = citySlice.actions;

export default citySlice;