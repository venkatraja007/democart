import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlusCircle, faRupeeSign, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Grid, Button } from '@material-ui/core';
import './CartProduct.scss';
function CartProductMobile(props) {
  let { product, handleCartCount, uniqueDataCount } = props;
  let { name, image, price, discount} = product;
  let count = uniqueDataCount(product);
  return (
      <Grid className="cart-prod-items" container>
          <Grid item className="new-price" xs={4} sm={4}>
          <picture>
              <img alt="test" className="product-img" src={image} />
          </picture>
          </Grid>
          <Grid item className="new-price" xs={8} sm={8}>
            <Grid container>
                <Grid item>
                    {name}
                </Grid>
            </Grid>  
                    <p>
                        <div className="product-price-block">
                            <div className="new-price">
                            <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button>{price.actual}
                            </div>
                            <div className="old-price">
                            <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button>{price.display}
                            </div>
                            <div className="price-offer" >
                            {discount}% off
                            </div>
                        </div>
                    </p>
            <Grid container>
                <Grid item>
                    <button onClick={() => handleCartCount(product, 0 )} className="cart-decrease cursor-pt">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="text" className="inputsize" value={count} size={3} style={{ border: "1px solid darkgray", textAlign: "center" }} />
                    <button onClick={() => handleCartCount(product, 1 )} className="cart-increase cursor-pt">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Grid>
            </Grid>
                    <Button className="cart-remove-label" size="small" color="default" onClick={() => handleCartCount(product, -1 )}> Remove </Button>
          </Grid>
      </Grid>
  );
}

export default CartProductMobile;