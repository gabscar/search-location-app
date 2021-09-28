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
        },
        relocateCity(state,action){
            const relocated = action.payload;
            let AuxList = state.cityList.map((item)=>{
                console.log(item)
                return item.components != relocated.components
            });
            state.cityList.unshift(relocated);
            if(state.cityList.length> 3){
                state.cityList.pop();
            }
        }
    }
})


export const CityActions = citySlice.actions;

export default citySlice;