import { useAppContext } from "../../useAppContext";
import PropTypes from "prop-types";

import { GiMeal } from "react-icons/gi";

import { Container } from "./styles";

function ProductCard ({ product }) {
    const { cart, addToCart, removeFromCart} = useAppContext();

    const cartItem = cart.find((item) => item.name === product.name);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <Container className="product-card">
          <GiMeal size={40}/>
          <div className="divProducts">
            <p>R$ {product.price}</p>
            <div className="divButton">
              <button onClick={() => removeFromCart(product)}>-</button>
              <span>{quantity}</span> 
              <button onClick={() => addToCart(product)}>+</button>
            </div>
          </div>
          <p>{product.name}</p>
        </Container>
      );
}

export default ProductCard

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
  }).isRequired,
}