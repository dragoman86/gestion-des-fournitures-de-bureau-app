const initialeState = {
    fournisseur: {
        name_fournisseur: "",
        email_fournisseur: "",
        tel_fournisseur: "",
        fax_fournisseur: "",
        adress_fournisseur: "",
    },
    error: null,
    loading: false,
    response: null,
    fournisseurs: [],
  };
  
  export const fournisseurReducer = (state = initialeState, action) => {
    switch (action.type) {
      case "GET_FOURNISSEUR":
        return {
          ...state,
          fournisseurs: action.payload,
        };
      case "ADD_FOURNISSEUR":
        return {
          ...state,
          fournisseurs: [...state.fournisseurs, action.payload],
        };
      case "DELETE_FOURNISSEUR":
        return {
          ...state,
          fournisseurs: state.fournisseurs.filter((fournisseur) => fournisseur.id !== action.payload),
        };
      case "GET_FOURNISSEUR_BY_ID":
        return {
          ...state,
          fournisseurs: action.payload,
        };
  
      default:
        return state;
    }
  };