"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUsers } from "./userApi.js";
import { selectUser } from "./userSlice.js";




const UserPage = () => {

  const dispatch = useDispatch();
  const { users } = useSelector(selectUser);

  const [ input, setInput ] = useState({
    name: "",
    email: "",
    gender: ""
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({ ...prevState,
      [e.target.name] : e.target.value
    }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(input));
    setInput({
      name: "",
      email: "",
      gender: ""
    });
  }


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="user-form">
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" value={input.name} onChange={handleInputChange} placeholder="name" />
          <input type="text" name="email" value={input.email} onChange={handleInputChange} placeholder="email" />
          <input type="text" name="gender" value={input.gender} onChange={handleInputChange} placeholder="gender" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="users">
          { users && users?.map((item, index) => {
            return (
              <ul key={index}>
                <li> Name: {item?.name} </li>
                <li> G-mail: {item?.email} </li>
                <li> Gender: {item?.gender} </li>
              </ul>
            );
          } ) }
      </div>
    </>
  )
}

export default UserPage;