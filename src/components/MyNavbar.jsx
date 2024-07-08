
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Container>
    <Navbar bg="light-grey" variant="secondary" expand="lg">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse >
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/favourites">Preferiti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};

export default MyNavbar;
