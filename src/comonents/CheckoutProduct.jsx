import { Rating } from "@mui/material";
import { useAuth } from '../context/GlobalState';
import "./CheckoutProduct.css"


// eslint-disable-next-line react/prop-types
const CheckoutProduct = ({id , image , price , rating , title , hiddenButton}) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />
      <div className="checkoutProduct-info">
      <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating" >
        <Rating precision={0.5} name="read-only" value={rating} readOnly />

        </div>
        {!hiddenButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}

      </div>
      
    </div>
  );
}

export default CheckoutProduct;
