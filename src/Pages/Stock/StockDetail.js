import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Redux/Actions/StockAction/StockAction";


const StockDetail = () => {
  const { productId } = useParams();
  
  const dispatch = useDispatch();
  const product = useSelector((state) => state.stockReducer.product);
  
  useEffect(() => {
    dispatch(getProductById(productId, dispatch)); 
  }, []);
  
  return (
    <>
    <h1>Quantité du produit disponible est :{product.detail_product}</h1> 
     
    </>
  )
}

export default StockDetail;