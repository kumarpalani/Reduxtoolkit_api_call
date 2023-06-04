import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk ('getusers', async ()=>{

    return axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(res=>{
        return res.data
    })


})

export const userSlice = createSlice({

    name:'getusers',
    initialState :{
users:[],
loading:false


    },

    extraReducers :{
[getUsers.pending]: (state)=>{

state.loading =true;

},

[getUsers.fulfilled]:(state,action)=>{

    state.loading = false;
    state.users= action.payload;


},

[getUsers.rejected]:(state)=>{

    state.loading= false;

}


    }






})

export default userSlice.reducer;