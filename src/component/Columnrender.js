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
            {userKey.map((k, i) => {
              return <th key={i}>{k} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((key, j) => {
            return (
              <tr key={key}>
                <td key={j}>{key[userKey[userKey.length - 1]]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Columnrender;
