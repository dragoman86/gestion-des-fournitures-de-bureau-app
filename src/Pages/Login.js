import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Login() {
    const [open, setOpen] = useState(false);

  return (
    <Form className='hover' style={{ width:"30%", margin:'auto', padding:'50px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2>Login</h2>
        <Form.Label>User</Form.Label>
        <Form.Control type="text" placeholder="Enter Login" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={() => setOpen(!open)} style={{marginRight:'20px'}} variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="reset">
        Reset
      </Button>
    </Form>
  );
}

export default Login;