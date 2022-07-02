import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UsersDetails() {
  let id = useParams().id;
  const [userData, setUserData] = useState({});
  const getAllData = async () => {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUserData(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="alert alert-warning">
      <h1>{`Welcome ${userData.name}`}</h1>
      <p>{`Email : ${userData.email}`}</p>
      <p>{`Phone : ${userData.phone}`}</p>
      <p>{`Email : ${userData.email}`}</p>
      <p className="alert alert-light w-50 m-auto">{`Address : ${userData.address?.street} - ${userData.address?.suite} - ${userData.address?.city}`}</p>
    </div>
  );
}
