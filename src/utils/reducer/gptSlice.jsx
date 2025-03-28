import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:"gpt",
    initialState:{
        movieNames:null,
        movieResults:null

    },
    reducers:{
        addGptMovieResult:(state ,action)=>{
            // here how you can handle multiple dispatch in a single slice
            const{movieNames ,movieResults} =action.payload
            state.movieNames=movieNames
            state.movieResults =movieResults
            
        }
    }
     
})

export const {addGptMovieResult} =gptSlice.actions
export default gptSlice.reducer