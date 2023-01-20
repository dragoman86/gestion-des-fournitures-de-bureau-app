import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, Button, Card, Form} from 'react-bootstrap';
import { getFournisseur, addFournisseur, deleteFournisseur } from "../../Redux/Actions/FournisseursActions/FournisseurAction";

function FournisseursList() {
  const dispatch = useDispatch();
  const [fournisseur, setFournisseur] = useState({
    name_fournisseur: "",
    email_fournisseur: "",
    tel_fournisseur: "",
    fax_fournisseur: "",
    adress_fournisseur: "",
  });
  const fournisseurs = useSelector((state) => state.fournisseurReducer.fournisseurs);
  
  useEffect(() => {
    dispatch(getFournisseur(dispatch));
  }, []);

  const handleChanges = (e) => {
    setFournisseur({ ...fournisseur, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div  className="addFourni d-flex justify-content-around" style={{ width:"35%", margin:'auto' }}>
        <Row>
          <Form.Control type="text" placeholder="Nom Fournisseur" name='name_fournisseur' onChange={handleChanges}/>
          <Form.Control placeholder="E-mail Fournisseur" type='email' name='email_fournisseur' onChange={handleChanges} />
          <Form.Control placeholder="Tel Fournisseur" type='text' name='tel_fournisseur' onChange={handleChanges} />
          <Form.Control placeholder="Fax Fournisseur" type='text' name='fax_fournisseur' onChange={handleChanges} />
          <Form.Control placeholder="Adresse Fournisseur" type='text' name='adress_fournisseur' onChange={handleChanges} />
      </Row>
      <Button 
        onClick={() => {
          dispatch(addFournisseur(fournisseur, dispatch));
        }}
      >
        Add Fournisseur
      </Button>
      </div>
      {fournisseurs.map((fournisseur) => {
        return (
          <div key={fournisseur.id} className="d-flex justify-content-around" style={{ flexWrap:'wrap'}}>
          <div className="d-flex justify-content-around d-inline p-2" style={{ flexWrap:'wrap', width: "18rem", marginTop:"2rem" }}>
          <Col>
             <Card className="bg-primary" style={{ color:"white"}}>
                <Card.Img variant="top" src="fourni5.jpg" style={{ width: "18rem" }}/>
                <Card.Body>
                <Card.Title>{fournisseur.name_fournisseur}</Card.Title>
                <Card.Text>
                <p>{fournisseur.email_fournisseur}</p>
                <p>{fournisseur.tel_fournisseur}</p>
                <p>{fournisseur.fax_fournisseur}</p>
                <p>{fournisseur.adress_fournisseur}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-light" onClick={() => dispatch(deleteFournisseur(fournisseur.id, dispatch))}>
                          Supprimer Fournisseur
                    </Button>
                    <Link to={`/fournisseurs/${fournisseur.id}`}>
                    <Button style={{ marginTop:"10px" }} variant="outline-light">Details</Button>
                    </Link>
                </Card.Footer>
              </Card>
              </Col>
          </div>
          </div>
       ) } )
      }
      
    </div>
  );
}

export default FournisseursList;