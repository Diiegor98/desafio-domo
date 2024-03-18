//Import React Hooks
import { useState } from "react";

//Import React-Bootstrap Components
import { Navbar, Nav, Container } from "react-bootstrap";

//Import React Icons
import { RiBankCardLine } from "react-icons/ri";

//Import Estilos
import "./navbar.css";

const NavBar = () => {
  const [navbarcolor, setNavbarcolor] = useState(false);

  //Esta función le da un background al navbar cuando el scroll en Y supera los 80px
  const changeBackgroundNav = () => {
    if (window.scrollY >= 80) {
      setNavbarcolor(true);
    } else {
      setNavbarcolor(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundNav);

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className={navbarcolor ? "active navbar" : "navbar"}
    >
      <Container>
        <Navbar.Brand className="nav-brand">compleet labs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 justify-content-end">
            <Nav.Link href="#top" className="nav-item text-white">
              <a>Home</a>
            </Nav.Link>
            <Nav.Link href="#services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link href="#technology" className="nav-item">
              Technology
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              Case studies
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link href="#footer" className="nav-item text-white">
              <RiBankCardLine /> Hire us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
