import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar style={{ marginBottom:'50px' }} bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <h1>
          <Badge bg="primary">Gestion des Fournitures de Bureau</Badge>
          </h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Acceuil</Link>
            <Link to='demandes' >Demandes</Link>
            <Link to='stock' >Stock</Link>
            <Link to='fournisseurs'>Fournisseurs</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;