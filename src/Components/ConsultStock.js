import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ConsultStock = () => {
    return (
        <Card style={{ width:'80%', margin:'auto', marginTop:'50px', marginBottom:'50px', color:"white" }} className="bg-primary text-center" >
      <Card.Header>Consultation Stock</Card.Header>
      <Card.Body>
        <Card.Title>Consultation Inventaire Stock</Card.Title>
        <Card.Text>
         Vous pouvez consulter ici l'etat du stock actuel.
        </Card.Text>
        <Button variant="outline-light" href='http://localhost:3001/stock' >Mon Stock</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    )
}

export default ConsultStock;