import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFournisseur, addFournisseur, deleteFournisseur } from "../Redux/Actions/FournisseurAction";

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
      <div>
      <input placeholder="Nom Fournisseur" type='text' name='name_fournisseur' onChange={handleChanges} />
      <input placeholder="E-mail Fournisseur" type='email' name='email_fournisseur' onChange={handleChanges} />
      <input placeholder="Tel Fournisseur" type='text' name='tel_fournisseur' onChange={handleChanges} />
      <input placeholder="Fax Fournisseur" type='text' name='fax_fournisseur' onChange={handleChanges} />
      <input placeholder="Adresse Fournisseur" type='text' name='adress_fournisseur' onChange={handleChanges} />

      <button
        onClick={() => {
          dispatch(addFournisseur(fournisseur, dispatch));
        }}
      >
        Add Fournisseur
      </button>
      </div>
      {fournisseurs.map((fournisseur) => {
        return (
          <div key={fournisseur.id}>
            <h3>{fournisseur.name_fournisseur}</h3>
            <p>{fournisseur.email_fournisseur}</p>
            <p>{fournisseur.tel_fournisseur}</p>
            <p>{fournisseur.fax_fournisseur}</p>
            <p>{fournisseur.adress_fournisseur}</p>
            <button onClick={() => dispatch(deleteFournisseur(fournisseurs.id, dispatch))}>
              Delete Fournisseur
            </button>
            <Link to={`/fournisseurs/${fournisseur.id}`}>
              <button>Details</button>
            </Link>
          </div>
        );
      })}
      
    </div>
  );
}

export default FournisseursList;