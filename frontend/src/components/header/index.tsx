import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { NavbarBrandGold, CustomNav } from "./styles.ts";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavbarBrandGold href="/">
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </NavbarBrandGold>
        <Navbar.Toggle aria-controls="navbarControll" />
        <Navbar.Collapse id="navbarScroll">
          <CustomNav className="me-auto my-2 my-lg-0">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/watchlist">Watch List</NavLink>
          </CustomNav>
          <Button variant="outline-info" className="me-2">
            Login
          </Button>
          <Button variant="outline-info">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
