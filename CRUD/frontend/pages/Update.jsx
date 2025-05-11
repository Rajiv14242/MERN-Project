import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: data.name,
        email: data.email,
      };
      if (data.password) {
        payload.password = data.password;
      }
      const response = await axios.put(
        "http://localhost:5000/user/update",
        payload,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        alert(response.data.message);
        navigate("/dashboard");
      } else {
        console.log("Failed to update");
        alert("Failed to update");
      }
    } catch (err) {
      console.log("Error occured");
      alert("Error occured");
    }
  };
  useEffect(() => {
    const fetching = async () => {
      const response = await axios.get("http://localhost:5000/user/detail", {
        withCredentials: true,
      });

      const { name, email, password } = response.data.data;
      setData({ name, email, password: "" });
    };
    fetching();
  }, []);
  return (
    <>
      <h1>Update Your details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        ></input>
        <label>Email: </label>
        <input
          type="text"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        ></input>
        <label>Password: </label>
        <input
          type="text"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></input>
        <input type="submit" value={"submit"}></input>
      </form>
    </>
  );
};

export default Update;
