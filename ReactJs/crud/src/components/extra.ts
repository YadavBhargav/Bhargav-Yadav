import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Create() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const postData = () => {
    axios.post(`https://62150bd7cdb9d09717ab8826.mockapi.io/data`, name);
  };
  const onChangeData = (data, type) => {
    if (type === "first") {
      name.firstName = data;
      setName({ ...name });
    } else if (type === "last") {
      name.lastName = data;
      setName({ ...name });
    }
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name : </label>
          <input
            placeholder="First Name"
            onChange={(e) => onChangeData(e.target.value, 'first')}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name : </label>
          <input
            placeholder="Last Name"
            onChange={(e) => onChangeData(e.target.value, 'last')}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
