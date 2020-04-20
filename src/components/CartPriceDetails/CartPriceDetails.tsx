import * as React from 'react';
import { Grid, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import "./CartPriceDetails.scss";
function CartPriceDetails(props) {
  let { cartProduct, cartPriceData } = props;
  let { cartCount , cartDiscountCount, totalPrice } = cartPriceData;
  return (
      <Grid className="cart-prod-right" container>
        <Grid className="cart-pd-title" item xl={12} lg={12}>
          PRICE DETAILS
        </Grid>
        <Grid className="cart-pd-content" item xl={12} lg={12} xs={12} sm={12}>
          <Grid container className="cart-pd-content-it" item xl={12} lg={12} xs={12} sm={12}>
            <Grid xl={4} lg={4} xs={6} sm={6} item className="cart-pd-total-lt"> Price ( {cartProduct.length} item ) </Grid>
            <Grid xl={4} lg={4} xs={2} sm={2} item>:</Grid>
            <Grid xl={4} lg={4} xs={4} sm={4} item className="cart-pd-total-rt"> 
              <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button> {cartCount} 
            </Grid>
          </Grid>
          <Grid container className="cart-pd-content-it" item xl={12} lg={12}>
            <Grid xl={4} lg={4} xs={6} sm={6} item className="cart-pd-total-lt"> Discount </Grid>
            <Grid xl={4} lg={4} xs={2} sm={2} item>:</Grid>
            <Grid xl={4} lg={4} xs={4} sm={4} item className="cart-pd-total-rt"> 
              <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button> {cartDiscountCount}
            </Grid>
          </Grid>
        </Grid>
        <Grid className="cart-pd-total" item xl={12} lg={12}>
            <span className="cart-pd-total-lt-txt"> Total Payable </span> <span className="cart-pd-total-rt"> 
            <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button> {totalPrice}
            </span>
        </Grid>
      </Grid>      
  );
}

export default CartPriceDetails;