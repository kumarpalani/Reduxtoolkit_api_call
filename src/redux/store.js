import { configureStore } from "@reduxjs/toolkit";
import getUsers from "./userSlice";


const store = configureStore({

    reducer:{

user:getUsers
    }


})

export default store;