import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [doc, setDoc] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/user/login",
        doc,
        { withCredentials: true }
      );
      if (response.data) {
        alert(response.data.message);
        if (response.data.success) {
          setDoc({
            email: "",
            password: "",
          });
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.log("Error Occured");
      alert("Error Occured");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={doc.email}
          onChange={(e) => setDoc({ ...doc, email: e.target.value })}
        ></input>
        <label>Password</label>
        <input
          type="text"
          value={doc.password}
          onChange={(e) => setDoc({ ...doc, password: e.target.value })}
        ></input>
        <input type="submit" value={"Submit"}></input>
      </form>
    </div>
  );
};

export default Login;
