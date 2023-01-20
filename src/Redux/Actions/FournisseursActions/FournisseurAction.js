// action to change name value input field
import axios from "axios";
export const getFournisseur = () => async (dispatch) => {
  {
    try {
      const response = await axios.get("http://localhost:3000/fournisseurs");
      if (response.status === 200) {
        dispatch({ type: "GET_FOURNISSEUR", payload: response.data });
      } else {
        dispatch({ type: "GET_FOURNISSEUR_ERROR", payload: response });
      }
    } catch (error) {
      dispatch({ type: "GET_FOURNISSEUR_ERROR", payload: error });
    }
  }
};

export const addFournisseur = (fournisseur) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/fournisseurs", fournisseur);
    if (response.status === 201) {
      dispatch({ type: "ADD_FOURNISSEUR", payload: response.data });
    } else {
      dispatch({ type: "ADD_FOURNISSEUR_ERROR", payload: response });
    }
  } catch (error) {
    dispatch({ type: "ADD_FOURNISSEUR_ERROR", payload: error });
  }
};

export const deleteFournisseur = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3000/fournisseurs/${id}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_FOURNISSEUR", payload: id });
    } else {
      dispatch({ type: "DELETE_FOURNISSEUR_ERROR", payload: null });
    }
  } catch (error) {
    dispatch({ type: "DELETE_FOURNISSEUR_ERROR", payload: error });
  }
};

export const getFournisseurById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/fournisseurs/${id}`);
    if (response.status === 200) {
      dispatch({ type: "GET_FOURNISSEUR_BY_ID", payload: response.data });
    } else {
      dispatch({ type: "GET_FOURNISSEUR_BY_ID_ERROR", payload: response });
    }
  } catch (error) {
    dispatch({ type: "GET_FOURNISSEUR_BY_ID_ERROR", payload: error });
  }
};