import { createSlice } from "@reduxjs/toolkit";

const querySlice=createSlice({
    name:"query",
    initialState:{
        queryHistory:[],
        currentQuery:"",
        queryStatus:"idle",
        resultData:null
    },
    reducers:{
        submitQuery:(state,action)=>{
            state.currentQuery=action.payload
            state.queryStatus="loading"
        },
        querySuccess:(state,action)=>{
            state.queryHistory.push(state.currentQuery)
            state.resultData=action.payload
            state.queryStatus="success"
        },
        queryError:(state,action)=>{
            state.queryStatus="error"
        },
    }
})

export const {submitQuery,querySuccess,queryError}=querySlice.actions;
export default querySlice.reducer
