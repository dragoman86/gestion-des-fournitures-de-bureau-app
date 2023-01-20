import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFournisseurById } from '../../Redux/Actions/FournisseursActions/FournisseurAction';
import { Accordion } from 'react-bootstrap';

const FournisseurDetail = () => {
  const { fournisseurId } = useParams();
  
  const dispatch = useDispatch();
  const fournisseur = useSelector((state) => state.fournisseurReducer.fournisseur);
  
  useEffect(() => {
    dispatch(getFournisseurById(fournisseurId, dispatch)); 
  }, []);
  
  return (
    <>
    <h1>name is:{fournisseur.name_fournisseur}</h1>
    <h2>e-mail is :{fournisseur.email_fournisseur}</h2> 
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>More details</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>  
    </>
  )
}

export default FournisseurDetail;