import Button from 'react-bootstrap/Button';
import { Form, Alert } from 'react-bootstrap';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from '../Redux/Actions/AuthReducer/authActions';


function Login() {
    const [user, setUser] = useState({
        login: "",
        password: "",
      });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.authReducer.error);
    const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(signIn(user, navigate, dispatch));
  };

  return (
    <Form className='bg-primary' style={{ width:"30%", margin:'auto', padding:'20px', borderRadius:'4%' }}>
        <h2 style={{ color:"white"}} >Se Connecter</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><svg xmlns="http://www.w3.org/2000/svg" color='white' width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                    </Form.Label>
                    <Form.Control onChange={handleChange} name='login' type="text" placeholder="Login" />
            </Form.Group>
                    <Form.Label><svg xmlns="http://www.w3.org/2000/svg" width="30" color="white" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Form.Label>  
            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handleChange} name='password' type="password" placeholder="Password" />
            </Form.Group>
      <Button onClick={handleSumit} variant="outline-light" type="submit" style={{marginRight:'20px'}} >
      Se Connecter
      </Button>
      
      <Button variant="outline-light" type="reset">
      Réinitialiser
      </Button>
      {error && <Alert style={{ marginTop:'30px' }} variant="primary">
      Login ou Mot de passe incorrecte!
        </Alert>}
    </Form>
  );
}

export default Login;