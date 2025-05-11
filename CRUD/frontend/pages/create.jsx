import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [doc, setDoc] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/create",
        doc,
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        alert(response.data.message);
        setDoc({ name: "", email: "", password: "" });
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("Error occured while submitting");
      alert("Error Occured while submitting");
    }
  };
  console.log("hello");
  return (
    <>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Name: </label>
        <input
          type="text"
          value={doc.name}
          onChange={(e) => {
            setDoc({ ...doc, name: e.target.value });
          }}
        ></input>
        <label>Enter Email: </label>
        <input
          type="text"
          value={doc.email}
          onChange={(e) => {
            setDoc({ ...doc, email: e.target.value });
          }}
        ></input>
        <label>Enter Password: </label>
        <input
          type="text"
          value={doc.password}
          onChange={(e) => setDoc({ ...doc, password: e.target.value })}
        ></input>
        <input type="submit" value={"submit"}></input>
      </form>
    </>
  );
};

export default Create;
