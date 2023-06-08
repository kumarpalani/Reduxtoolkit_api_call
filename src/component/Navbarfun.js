import {} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Nav, Navbar } from "react-bootstrap";

const Navbarfun = ({ user, isuserLogged, handleLogout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Image src={user.picture} roundedCircle={true} />
        {user.name}
      </Navbar.Brand>
      <Nav className="flex-grow-1">
        <Nav.Item className="ms-auto">
          <Nav.Link to="/login">
            {isuserLogged && <button onClick={handleLogout}>Signout</button>}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navbarfun;
