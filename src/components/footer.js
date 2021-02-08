import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/gatsby-icon.png';
import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      <Navbar sticky="bottom" bg="dark" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Basic Credit
            </Navbar.Brand>
          </Link>
          <Nav className="justify-content-space-evenly">
            <Link to="/funding">
              <Nav.Link as="span">Funding</Nav.Link>
            </Link>
            <Link to="https://www.google.com/">
              <Nav.Link as="span">Discord</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link as="span">About</Nav.Link>
            </Link>
            <Link to="/app">
              <Nav.Link as="span">Use Basic Credit</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
