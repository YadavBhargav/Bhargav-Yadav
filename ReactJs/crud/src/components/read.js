import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62150bd7cdb9d09717ab8826.mockapi.io/data`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, password } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Password", password);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://62150bd7cdb9d09717ab8826.mockapi.io/data/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://62150bd7cdb9d09717ab8826.mockapi.io/data`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  return (
    <div>
      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>

              <Table.Cell>{data.lastName}</Table.Cell>

              <Table.Cell>{data.password}</Table.Cell>
              {/* <Table.HeaderCell>Update</Table.HeaderCell> */}
              <Link to="/update">
                <Table.Cell>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Table.Cell>
              </Link>
              <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </div>
  );
}
