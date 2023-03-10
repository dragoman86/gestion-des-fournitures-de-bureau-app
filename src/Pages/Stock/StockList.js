import { Accordion, InputGroup, Table, Modal, Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, deleteProduct, getProduct, addProduct } from "../../Redux/Actions/StockAction/StockAction";

const StockList = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name_product: "",
        quantity_product: "",
        reference_product: "",
        detail_product: "",
      });

    //Close and Show Modal qantity
    const [smShow, setSmShow] = useState(false);  

    const [show, setShow] = useState(false);
    //Close and Show Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    //Close and Show Modal Delete yesy or no?
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
      
    const products = useSelector((state) => state.stockReducer.products);

    useEffect(() => {
        dispatch(getProduct(dispatch));
      }, []);
    
    const handleChanges = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };

    //search by name product
      const [query, setQuery] = useState("");
      const filtredProduct = products.filter((product) => {
      return product.name_product.toLowerCase().includes(query.toLowerCase())})  


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
            <Form.Control style={{margin:'1rem'}} type="text" placeholder="Nom du Produit" name='name_product' onChange={handleChanges}/>
            <Form.Control style={{margin:'1rem'}} placeholder="Quantit?? du Produit" type='text' name='quantity_product' onChange={handleChanges} />
            <Form.Control style={{margin:'1rem'}} placeholder="R??f??rence du Produit" type='text' name='reference_product' onChange={handleChanges} />
            <Form.Control style={{margin:'1rem'}} as="textarea" placeholder="D??tail du Produit" name='detail_product' onChange={handleChanges} />
            <Button
            onClick={() => {
                dispatch(addProduct(product, dispatch)) && handleClose();
              }} 
            className='primary' 
            style={{ margin:'2rem' }}>Ajout Produit</Button>
        </div>
            </Modal.Body>
      </Modal>
    </div>
    <h1>Etat du Stock</h1>
    <InputGroup style={{width:'80%', margin:'auto'}} className="mb-3 primary">
        <Form.Control
          placeholder="Recherche..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(event) => setQuery(event.target.value)}
        />
        <InputGroup.Text style={{color:'white'}} className='bg-primary' id="basic-addon2">Rechercher par "Nom de Produit"</InputGroup.Text>
      </InputGroup>
    <div style={{ width:'80%', margin:'auto' }}>
    <Table className='primary' striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Quantit??</th>
          <th>Nom de Produit</th>
          <th>R??f??rence de produit</th>
          <th>D??tails de produit</th>
        </tr>
      </thead>
      <tbody>

      {filtredProduct.map((product) => {
            return (
                <>
        <tr>
          <td>
          <Link>     
              <svg onClick={() => setSmShow(true)} className="me-2" style={{marginRight:'1rem'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
              </svg>
          </Link>
        <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Ajouter Quantit??s
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button>+</Button>
          <Button>-</Button>
        </Modal.Body>
      </Modal>
            
            

              <Link striped bordered hover variant="primary" onClick={handleShow2}>
                <svg color='red'
                    xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg> 
              </Link>

      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>V??rification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        ??tes-vous s??r de vouloir supprimer?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Annuler
          </Button>
          <Button onClick={() => dispatch(deleteProduct(product.id, dispatch)) && handleClose2() }
                  variant="primary">Oui</Button>
        </Modal.Footer>
      </Modal>
 
              
          </td>
          <td key={product.id}>{product.id}</td>
          <td>
              <Form.Control style={{ color: product.quantity_product > 21
                                  ? 'green'
                                  : 'red',
                              width:'5rem'    
                                  }} 
                      value={product.quantity_product}
                      name='quantity_product'
                      onChange={handleChanges}
                      />
          </td>
          <td>{product.name_product}</td>
          <td>{product.reference_product}</td>
          <td>
          <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Plus de details</Accordion.Header>
                  <Accordion.Body>
                  {product.detail_product}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> 
          </td>
          </tr>
          </>
        )})}  
     </tbody>
        </Table>
        </div>
        
      </>
    )
}

export default StockList;