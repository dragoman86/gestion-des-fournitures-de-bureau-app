const initialeState = {
    product: {
        name_product: "",
        quantity_product: "",
        reference_product: "",
        detail_product: "",
    },
    error: null,
    loading: false,
    response: null,
    products: [],
  };

  export const stockReducer = (state = initialeState, action) => {
    switch (action.type) {
      case "GET_PRODUCT":
        return {
          ...state,
          products: action.payload,
        };
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case "ADD_QUANTITY":
          return {
            ...state,
            products: state.products.filter((product) => product.quantity_product !== action.payload),         
          };  
      case "GET_PRODUCT_BY_ID":
        return {
          ...state,
          products: action.payload,
        };
        case "DELETE_PRODUCT":
          return {
            ...state,
            products: state.products.filter((product) => product.id !== action.payload),
          };  
  
      default:
        return state;
    }
  };
  