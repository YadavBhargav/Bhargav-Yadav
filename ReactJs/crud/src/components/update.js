import React, { useState, useEffect } from "react";
import { Button, Form, Label } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router';

export default function Update() {
  // let history = useHistory();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setPassword(localStorage.getItem("Password"));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://62150bd7cdb9d09717ab8826.mockapi.io/data/${id}`, {
      firstName,
      lastName,
      password,
    });
    // .then(() => {
    //   history.push("/read");
    // });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name : </label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name : </label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Label>Password :</Label>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Submit
        </Button>
        <Link to="/read">
          <Button>Read</Button>
        </Link>
      </Form>
    </div>
  );
}
