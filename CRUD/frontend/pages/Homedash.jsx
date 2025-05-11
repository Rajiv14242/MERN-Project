import { useEffect, useState } from "react";
import axios from "axios";
const Homedash = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      const retrived_data = await axios.get(
        "http://localhost:5000/user/detail",
        {
          withCredentials: true,
        }
      );
      console.log(retrived_data.data);
      setUser(retrived_data.data.data);
      setLoading(false);
    };
    fetching();
  }, []);
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <h1>Account Details</h1>
      <h3>
        Name:<span>{user.name}</span>
      </h3>
      <h3>
        Email:<span>{user.email}</span>
      </h3>
    </>
  );
};

export default Homedash;
