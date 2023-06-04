import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/userSlice";
import UserTable from "./component/Usertable";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Usertable from "./component/Usertable";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);
  const { isLoading, setIsLoading } = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) return "...Loading...";

  return (
    <Container>
      <div className="App">
        <h1>Using Redux toolkit to fetch data from API</h1>
        <p>Please select checkbox to enble each table key value</p>
        {users.map((items, index) => {
          return <Usertable items={items} index={index} />;
        })}
      </div>
    </Container>
  );
}

export default App;
