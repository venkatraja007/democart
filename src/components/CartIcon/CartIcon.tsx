import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './CartIcon.scss';

function CartIcon(props) {
  let { cartCount } = props;
  return (
    <>
    <Link to="/CartPage">
      <button className="cart-icon cursor-pt">
        <FontAwesomeIcon icon={faShoppingCart} /><sup className="cart-count">{cartCount}</sup>
      </button>
    </Link>
    </>
  );
}

export default CartIcon;