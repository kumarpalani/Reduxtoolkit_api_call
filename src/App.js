import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/userSlice";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Rowrender from "./component/Rowrender";
import Navbarfun from "./component/Navbarfun";

import jwt_decode from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ undefined });
  const { users, loading, error } = useSelector((state) => state.user);
  const handleCredentialResponse = (response) => {
    let userDetails = jwt_decode(response.credential);

    setUser(userDetails);
    document.getElementById("signinDiv").hidden = true;
  };

  const isuserLogged = Object.keys(user).length !== 0;

  const handleLogout = () => {
    setUser({});
    document.getElementById("signinDiv").hidden = false;
  };

  useEffect(() => {
    /*global google*/

    //check window if exist on each effect execution
    window.google.accounts.id.initialize({
      client_id:
        "503322800040-c3st4vl825hgrs3tbi73rj94fhfp0qun.apps.googleusercontent.com",
      callback: (data) => {
        handleCredentialResponse(data);
      }
    });

    window.google.accounts.id.renderButton(
      document.querySelector("#signinDiv"),
      {}
    );
    window.google.accounts.id.prompt();
    dispatch(getUsers());
  }, []);

  return (
    <Container>
      <div className="App">
        {isuserLogged && (
          <Navbarfun
            user={user}
            isuserLogged={isuserLogged}
            handleLogout={handleLogout}
          />
        )}
        <h1>Using Redux toolkit to fetch data from API</h1>
        <p>
          {isuserLogged
            ? " Please select the checkbox and click submit to enable key values"
            : "Google Identity Services OAuth2 JWT Login"}
        </p>
        {Object.keys(user).length > 0 && <Rowrender users={users} />}
        <div id="signinDiv"></div>
      </div>
    </Container>
  );
}

export default App;
