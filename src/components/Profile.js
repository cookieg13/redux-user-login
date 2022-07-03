import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector(state => state.userObj.value)
    const color = useSelector(state=> state.theme.value)
    return (
        <div style={{color: color}}>
      <h2>Profile Page</h2>
      <p>Name: {user.name} </p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email} </p>
      </div>
    );
  }
  
  export default Profile;
  