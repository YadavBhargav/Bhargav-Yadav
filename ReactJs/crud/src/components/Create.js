import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router';
import { Button, Form } from "semantic-ui-react";

export default function Create() {
  // const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const postData = () => {
    axios.post(`https://62150bd7cdb9d09717ab8826.mockapi.io/data`, {
      firstName,
      lastName,
      password,
    });
    // .then(() => {
    //   console.log(history(), '....history');
    //   // history.push("/read");
    // });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name : </label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name : </label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password :</label>
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
        <Link to="/read">
          <Button>Read</Button>
        </Link>
      </Form>
    </div>
  );
}
