import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/userSlice";
import UserTable from "./component/Usertable";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Usertable from "./component/Usertable";
import { Row } from "react-bootstrap";
import Rowrender from "./component/Rowrender";
import Columnrender from "./component/Columnrender";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [rowKey, setRowkey] = useState("");
  const firstObject = Object.keys(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) return "...Loading...";

  return (
    <Container>
      <div className="App">
        <h1>Using Redux toolkit to fetch data from API</h1>
        <p>Please select checkbox to enble each table key value</p>

        <Rowrender users={users} />

        {/* <Usertable items={items} index={index} />;    */}

        {/* {rowKey !== " " ? <Usertable items={users} keyItem={rowKey} /> : ""} */}
      </div>
    </Container>
  );
}

export default App;
