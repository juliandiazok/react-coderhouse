import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/images/loguito.png';

function NavbarLight() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <img  
              src={logo}
              width="130"
              height="30"
              className="d-inline-block align-top"
              alt="Ponzoo"
            />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Tienda</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
          </Nav>
        </Container>
        <Navbar.Collapse className="justify-content-end">
          <CartWidget/>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
}

export default NavbarLight;