import { Container, Navbar, Badge } from 'react-bootstrap';
import RenderIf from './RenderIf';

const Footer = () => {
    return (
        <Navbar style={{ marginTop:'50px' }} bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>
              <h6>
                <Badge bg="primary">Copy Right BENNA Walid | GoMyCode 2023</Badge>
              </h6>
            </Navbar.Brand>
          </Container>
        </Navbar>
    )
}

export default Footer;