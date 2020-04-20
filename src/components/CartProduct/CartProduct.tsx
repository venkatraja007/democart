import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Grid, Button } from '@material-ui/core';
import './CartProduct.scss';
function CartProduct(props) {
  let { product, handleCartCount, uniqueDataCount } = props;
  let { name, image, price, discount } = product;
  let count = uniqueDataCount(product);
  return (
      <Grid className="cart-prod-items" container>
          <Grid item className="new-price" xl={3} lg={3}>
          <picture>
              <img alt="test" className="product-img" src={image} />
          </picture>
          </Grid>
          <Grid item className="new-price ca-product-price-st" xl={4} lg={4}>
                <p className="product-title ca-product-title">
                    {name}
                </p>
                <p>
                  <Grid className="product-price-block ca-product-price" container>
                      <Grid item className="new-price" xs={4}>
                      <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button>{price.actual}
                      </Grid>
                      <Grid item className="old-price" xs={4}>
                      <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button>{price.display}
                      </Grid>
                      <Grid className="price-offer" item xs={4}>
                      {discount}% off
                      </Grid>
                  </Grid>
                </p>
          </Grid>
          <Grid item className="new-price ca-product-count" xl={3} lg={3}>
            <Grid className="ca-product-count-sub" container>
              <Grid item className="">
              <button onClick={() => handleCartCount(product, 0 )} className="cart-decrease cursor-pt">
                  <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              </Grid>
              <Grid item className="ca-product-count-input">
                <input type="text" size={3} value={count} style={{ textAlign: "center", border: "1px solid darkgray" }}/>
              </Grid>
              <Grid item className="">
                <button onClick={() => handleCartCount(product, 1 )} className="cart-increase cursor-pt">
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </Grid>
              </Grid>
          </Grid>
          <Grid item className="cp-remove-cart-btn" xl={2} lg={2}>
              <Button className="remove-cart-btn" size="small" color="default" onClick={() => handleCartCount(product, -1 )}> Remove </Button>
          </Grid>
      </Grid>
  );
}

export default CartProduct;