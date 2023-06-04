import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Columnrender from "./Columnrender";

const Rowrender = ({ users }) => {
  const [rowKey, setRowkey] = useState([]);
  const getKey = (e) => {
    const rowKeyval = e.target.getAttribute("data-item");
    if (rowKey.includes(rowKeyval)) {
      return true;
    }
    setRowkey([...rowKey, rowKeyval]);
  };
  return (
    <>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> Key </th>
          </tr>
        </thead>
        <tbody>
          {users.map((items, index) => {
            return (
              index === 0 &&
              Object.keys(items).map((key) => {
                return (
                  <tr key={index + key}>
                    <td
                      style={{ cursor: "pointer" }}
                      data-item={key}
                      onClick={(e) => getKey(e)}
                      key={key + items.id}
                    >
                      {key}
                    </td>
                  </tr>
                );
              })
            );
          })}
        </tbody>
      </Table>
      <Columnrender items={users} userKey={rowKey} />
    </>
  );
};

export default Rowrender;
