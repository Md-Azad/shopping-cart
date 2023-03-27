import React, { useEffect, useState } from "react";
import User from "../User/User";

const LoadData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((user) => (
        // console.log(user)
        <User key={user.id} data={user}></User>
      ))}
    </div>
  );
};

export default LoadData;
