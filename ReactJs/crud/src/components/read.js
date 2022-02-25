import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://62150bd7cdb9d09717ab8826.mockapi.io/data`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])
  return (
    <div>
      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </div>
  );
}
