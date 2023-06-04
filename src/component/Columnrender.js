import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
const Columnrender = ({ items, userKey }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(!checked);
  };
  return (
    <>
      {/* <p>
    {checked ? 'Checked' : 'Not checked'}
    </p>  */}
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>
              {" "}
              <Form.Check onChange={handleChange} aria-label="option 1" />
            </th>
            <th>{userKey} </th>
            <th> Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map((key) => {
            return (
              <tr key={key}>
                <td></td>
                <td key={key + items.id}>{key[userKey]}</td>
                <td key={items.id + key}>{checked ? items[key] : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Columnrender;
