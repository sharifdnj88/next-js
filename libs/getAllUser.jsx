import axios from "axios";


const getAllUser = async () => {
    // get response
    const response = await axios.get("http://localhost:3000/api/user");

    if (!response.data.users) throw new Error("User Data not found");

    // send Data
    return response.data.users;
  
}

export default getAllUser;