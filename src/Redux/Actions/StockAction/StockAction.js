import axios from "axios";
export const getProduct = () => async (dispatch) => {
  {
    try {
      const response = await axios.get("http://localhost:3000/products");
      if (response.status === 200) {
        dispatch({ type: "GET_PRODUCT", payload: response.data });
      } else {
        dispatch({ type: "GET_PRODUCT_ERROR", payload: response });
      }
    } catch (error) {
      dispatch({ type: "GET_PRODUCT_ERROR", payload: error });
    }
  }
};

export const addProduct = (product) => async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/products", product);
      if (response.status === 201) {
        dispatch({ type: "ADD_PRODUCT", payload: response.data });
      } else {
        dispatch({ type: "ADD_PRODUCT_ERROR", payload: response });
      }
    } catch (error) {
      dispatch({ type: "ADD_PRODUCT_ERROR", payload: error });
    }
  };

  export const addQuantity = (quantity_product) => async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3000/products/${quantity_product}`);
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: "ADD_QUANTITY", payload: quantity_product });
      } else {
        dispatch({ type: "ADD_QUANTITY_ERROR", payload: response });
      }
    } catch (error) {
      dispatch({ type: "ADD_QUANTITY_ERROR", payload: error });
    }
  };  

  export const deleteProduct = (id) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3000/products/${id}`);
      if (response.status === 200) {
        dispatch({ type: "DELETE_PRODUCT", payload: id });
      } else {
        dispatch({ type: "DELETE_PRODUCT_ERROR", payload: null });
      }
    } catch (error) {
      dispatch({ type: "DELETE_PRODUCT_ERROR", payload: error });
    }
  };  

  export const getProductById = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      if (response.status === 200) {
        dispatch({ type: "GET_PRODUCT_BY_ID", payload: response.data });
      } else {
        dispatch({ type: "GET_PRODUCT_BY_ID_ERROR", payload: response });
      }
    } catch (error) {
      dispatch({ type: "GET_PRODUCT_BY_ID_ERROR", payload: error });
    }
  };

  