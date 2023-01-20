import { InputGroup, Table, Modal, Form, Button, Card, Row } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, deleteProduct, getProduct, addProduct } from "../../Redux/Actions/StockAction/StockAction";


const StockList = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name_product: "",
        quantity_product: "",
        reference_product: "",
        detail_product: "",
      });

    const [show, setShow] = useState(false);
    //Close and Show Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    const products = useSelector((state) => state.stockReducer.products);

    useEffect(() => {
        dispatch(getProduct(dispatch));
      }, []);
    
    const handleChanges = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };  

    return(
        <>
        <div>
            <Button style={{ marginBottom:'2rem' }}
                    variant="primary" onClick={handleShow}>
                     Ajouter un nouveau Produit
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter un nouveau Produit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{ width:'18rem', margin:'auto' }}>
            <Form.Control type="text" placeholder="Nom du Produit" name='name_product' onChange={handleChanges}/>
            <Form.Control placeholder="Quantité du Produit" type='text' name='quantity_product' onChange={handleChanges} />
            <Form.Control placeholder="Référence du Produit" type='text' name='reference_product' onChange={handleChanges} />
            <Form.Control as="textarea" placeholder="Détail du Produit" name='detail_product' onChange={handleChanges} />
            <Button
            onClick={() => {
                dispatch(addProduct(product, dispatch));
              }} 
            className='primary' 
            style={{ margin:'2rem' }}>Ajout Produit</Button>
        </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <h1>Etat du Stock</h1>
    <InputGroup className="mb-3" 
        style={{width:'80%', margin:'auto'}}
        >
        <Button 
        variant="outline-primary" id="button-addon1">
          Rechercher
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    <div style={{ width:'80%', margin:'auto' }}>
    <Table className='primary' striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Quantité</th>
          <th>Nom de Produit</th>
          <th>Détails de produit</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product) => {
            return (
                <>
        <tr>
          <td key={product.id}>{product.id}</td>
          <td>{product.quantity_product}</td>
          <td>{product.name_product}</td>
          <td>{product.detail_product}</td>
          </tr>
          </>
        )})}  
     </tbody>
        </Table>
        </div>

        <Row> 
        {products.map((product) => {
        return (              
          <Card
            key={product.id}
            style={{ margin:'5rem', color:'whitesmoke', width: '18rem' }}
            className="mb-2 bg-primary"
          >
            <Card.Header>Quantités : <span 
            style={{ fontSize:'2rem'}}
            >{product.quantity_product}</span> unités</Card.Header>
            <Card.Body>
              <Card.Title>{product.name_product}</Card.Title>
              <Card.Text>
              Réf : {product.reference_product}
              </Card.Text>
              <Card.Text>
              Détail : {product.detail_product}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                    <Button variant="outline-light" onClick={() => dispatch(addQuantity(product.quantity_product, dispatch))}>
                          Ajouter Quantité
                    </Button>
                    <Button style={{ marginTop:"10px" }}
                            variant="outline-light" onClick={() => dispatch(deleteProduct(product.id, dispatch))}>
                          Supprimer Produit
                    </Button>
                    <Link to={`/products/${product.id}`}>
                        <Button style={{ marginTop:"10px" }} 
                            variant="outline-light">
                            Details
                        </Button>
                    </Link>
                </Card.Footer>
          </Card>
        )})}
        </Row>
      </>
    )
}

export default StockList;