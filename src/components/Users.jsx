import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Users() {
  const [users, setUsers] = useState([]);
  let searchTerm = '';
  let [resultList, setResultList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setResultList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let searchInputHandle = (e) => {
    searchTerm = e.target.value;
    setResultList(users.filter((item) => {return item.name.toLowerCase().includes(searchTerm.toLowerCase())}));
  }


  return (
    <div className="alert alert-danger">
      <h1>All Data Content</h1>
      <div className="alert alert-info mt-4">
      <InputGroup onChange={searchInputHandle} className="w-50 mx-auto mb-3">
        <Form.Control
          placeholder="Search for users"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
        {resultList &&
          resultList.map((item, index) => {
            return (
              <div key={Math.random()} className="bg-light p-3 m-3">
                <h2>
                  {index+1} : {item.name}
                </h2>
                <p>{item.email}</p>
                <NavLink to={`/users/${item.id}`} className="btn btn-outline-primary">
                  Show uses Details
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}
