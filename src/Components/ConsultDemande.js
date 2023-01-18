import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ConsultDemande = () => {
    return (
        <Card style={{ width:'80%', margin:'auto', marginTop:'50px', marginBottom:'50px', color:"white" }} className="bg-primary text-center" >
      <Card.Header>Consultation demandes</Card.Header>
      <Card.Body>
        <Card.Title>Consultation des demandes des employés</Card.Title>
        <Card.Text>
         Vous pouvez consulter ici les demandes recus par les employers.
        </Card.Text>
        <Button variant="outline-light" href='http://localhost:3001/demande' >Demandes</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    )
}

export default ConsultDemande;