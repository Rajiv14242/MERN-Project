import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Delete = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const response = await axios.delete("http://localhost:5000/user/delete", {
        withCredentials: true,
      });
      if (response.data.success) {
        console.log(response.data.message);
        alert(response.data.message);
        navigate("/");
      } else {
        console.log("Failed to delete");
        alert("Failed to delete");
      }
    } catch (err) {
      console.log("Error occured while deleting");
      alert("Error occured while deleting");
    }
  };
  return (
    <>
      <h1>Delete Page: </h1>
      <button onClick={handleClick}>Click to delete this account</button>
    </>
  );
};

export default Delete;
