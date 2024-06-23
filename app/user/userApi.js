import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {

    //get response
  const users = await getAllUser();
  
  // send data
  return users;
});

export const createUser = createAsyncThunk("user/createUser", async (data) => {

  const response = await axios.post("http://localhost:3000/api/user", data);

    // send Data
    return response.data.user;
  
});