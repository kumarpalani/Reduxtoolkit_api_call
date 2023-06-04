import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/userSlice";
import UserTable from "./component/Usertable";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Usertable from "./component/Usertable";
import { Row } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);
  const { isLoading, setIsLoading } = useState(false);
  const firstObject = Object.keys(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const getKey = (e) => {
    alert(e.target.getAttribute("data-item"));
  };

  if (loading) return "...Loading...";

  return (
    <Container>
      <div className="App">
        <h1>Using Redux toolkit to fetch data from API</h1>
        <p>Please select checkbox to enble each table key value</p>
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

            {/* <Usertable items={items} index={index} />;    */}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default App;
