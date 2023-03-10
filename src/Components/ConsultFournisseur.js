import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ConsultFournisseur = () => {
    return (
        <Card style={{ width:'80%', margin:'auto', marginTop:'50px', marginBottom:'50px', color:"white" }} className="bg-primary text-center" >
      <Card.Header>Consultation Fournisseurs</Card.Header>
      <Card.Body>
        <Card.Title>Consultation liste des Fournisseurs</Card.Title>
        <Card.Text>
         Vous pouvez consulter ici la liste des fournisseurs pour passer des commandes.
        </Card.Text>
        <Button variant="outline-light" href='http://localhost:3001/fournisseurs' >Fournisseurs</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    )
}

export default ConsultFournisseur;