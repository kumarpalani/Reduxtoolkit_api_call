import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('get/getUsers',async ()=>{

    return axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(res=>{ return res.data})

})


const userdataSlice = createSlice({
name:'getusers',

initialState: {

    users:[],
    loading: false
},

extraReducers: {

[getUsers.pending]:(state,action)=>{

state.loading= true;

},

[getUsers.fulfilled]:(state,action)=>{

state.loading= false;

state.users= action.payload;
},
[getUsers.rejected]:(state,action)=>{
    state.loading = false;
}

}



})

export default userdataSlice.reducer;