import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFournisseurById } from '../Redux/Actions/FournisseurAction';

const FournisseurDetail = () => {
  const { fournisseurID } = useParams();
  const dispatch = useDispatch();
  const fournisseur = useSelector((state) => state.FournisseurReducer.fournisseur);
  
  useEffect(() => {
    dispatch(getFournisseurById(fournisseurID, dispatch));
  }, []);

  return (
    <>
      <h1>Fournisseur Details</h1>
      <h3>{fournisseur.name_fournisseur}</h3>
      <p>test</p>
    </>
  );
};

export default FournisseurDetail;