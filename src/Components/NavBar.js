import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from '../Redux/Actions/AuthReducer/authActions';
import RenderIf from './RenderIf';


const NavBar = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logOut = () => dispatch(signOut(navigate, dispatch))
  return (
    <Navbar style={{ width: '100%', marginBottom: '50px' }} bg="primary" variant="dark">
      <Container>
        <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
          <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
        </svg>
        <Navbar.Brand>

          <h1 >
            <Badge style={{ fontFamily: 'Cairo, sans-serif' }} >Gestion des Fournitures de Bureau</Badge>
          </h1>
        </Navbar.Brand>
        <Nav className="me-auto">


          <RenderIf condition={token}>
            <Link to='/home'>Acceuil</Link>
            <Link to='demandes' >Demandes</Link>
            <Link to='stock' >Stock</Link>
            <Link to='fournisseurs'>Fournisseurs</Link>
            <Link to='/' onClick={()=>logOut()}>
                <svg  xmlns="http://www.w3.org/2000/svg" color='white' width="40" height="40" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </Link>
            
          </RenderIf>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;