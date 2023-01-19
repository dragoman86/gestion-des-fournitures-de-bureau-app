import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFournisseurById } from '../Redux/Actions/FournisseurAction';


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
    </>
  )
}

export default FournisseurDetail;