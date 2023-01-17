import Card from 'react-bootstrap/Card';

function ImgOverText() {
  return (
    <div style={{ width:"80%", margin:"auto" }} > 
        <Card className="bg-dark text-white" >
        <Card.Img src="fourni7.jpg" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Logiciel de Gestion des Fournitures de Bureau</Card.Title>
            <Card.Text>
            Gardez la trace de votre équipement de bureau, de vos fournitures, de votre mobilier et plus encore grâce à un logiciel des inventaires de bureau facile à utiliser, basé sur le Web et conçu pour les entreprises.
            </Card.Text>
        </Card.ImgOverlay>
        </Card>
    </div>
  );
}

export default ImgOverText;