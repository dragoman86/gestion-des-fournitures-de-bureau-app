import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, InputGroup, Row, Button, Card, Form} from 'react-bootstrap';
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
  
  //search by name fournisseur
  const [search, setSearch] = useState("");
  const filteredFournisseur = fournisseurs.filter((fournisseur) => {
  return fournisseur.name_fournisseur.toLowerCase().includes(search.toLowerCase())})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getFournisseur(dispatch));
  }, []);

  const handleChanges = (e) => {
    setFournisseur({ ...fournisseur, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <Button style={{ marginBottom:'2rem' }} variant="primary" onClick={handleShow}>
        Ajouter un nouveau Fournisseur
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajout Fournisseur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="Nom Fournisseur" name='name_fournisseur' onChange={handleChanges}/>
          <Form.Control style={{margin:'1rem'}} placeholder="E-mail Fournisseur" type='email' name='email_fournisseur' onChange={handleChanges} />
          <Form.Control style={{margin:'1rem'}} placeholder="Tel Fournisseur" type='text' name='tel_fournisseur' onChange={handleChanges} />
          <Form.Control style={{margin:'1rem'}} placeholder="Fax Fournisseur" type='text' name='fax_fournisseur' onChange={handleChanges} />
          <Form.Control style={{margin:'1rem'}} placeholder="Adresse Fournisseur" type='text' name='adress_fournisseur' onChange={handleChanges} />
          <Button
            onClick={() => {
                dispatch(addFournisseur(fournisseur, dispatch)) && handleClose();
              }} 
            className='primary' 
            style={{ margin:'2rem' }}>Ajout Fournisseur</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <InputGroup style={{width:'80%', margin:'auto'}} className="mb-3 primary">
        <Form.Control
          placeholder="Recherche..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(event) => setSearch(event.target.value)}
        />
        <InputGroup.Text style={{color:'white'}} className='bg-primary' id="basic-addon2">Rechercher par "Nom de Fournisseur"</InputGroup.Text>
      </InputGroup>
      <Row style={{ width:'80%',margin:'auto' }} >
      {filteredFournisseur.map((fournisseur) => {
        return (
             <Card key={fournisseur.id} className="text-primary" variant="outline-primary" style={{ margin:'2rem', width: "18rem"}}>
                <Card.Img variant="top" src="fourni5.jpg" />
                <Card.Body variant="outline-primary">
                <Card.Title >{fournisseur.name_fournisseur}</Card.Title>
                <Card.Text>
                <p>{fournisseur.email_fournisseur}</p>
                <p>{fournisseur.tel_fournisseur}</p>
                <p>{fournisseur.fax_fournisseur}</p>
                <p>{fournisseur.adress_fournisseur}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer variant="bg-primary">
                    <Button variant="outline-primary" onClick={() => dispatch(deleteFournisseur(fournisseur.id, dispatch))}>
                          Supprimer
                    </Button>
                    <Link to={`/fournisseurs/${fournisseur.id}`}>
                    <Button style={{ marginTop:"10px" }} variant="outline-primary">Details</Button>
                    </Link>
                </Card.Footer>
              </Card>
       ) } )
      }
      </Row>
      
    </div>
  );
}

export default FournisseursList;