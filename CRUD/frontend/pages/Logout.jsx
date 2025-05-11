import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  async function handleClick() {
    console.log("hello");
    try {
      const response = await axios.get("http://localhost:5000/user/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        console.log(response.data.message);
        alert(response.data.message);
        navigate("/login");
      } else {
        console.log("Failed to logout");
        alert("Failed to logout , token is still there");
      }
    } catch (err) {
      console.log("Failed to logout");
      alert("Failed to logout");
    }
  }
  return (
    <>
      <h1>Logout Page</h1>
      <button onClick={handleClick}>Click here to logout</button>
    </>
  );
};

export default Logout;
