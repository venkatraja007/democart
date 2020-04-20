import * as React from 'react';
import CartProduct from './../CartProduct/CartProduct';
import CartProductMobile from './../CartProduct/CartProductMobile';
import CartPriceDetails from "./../CartPriceDetails/CartPriceDetails";
import { Grid, Hidden } from '@material-ui/core';
import Container  from './../../container/index';
import SnackbarComponent from "./../Common/SnackBar/SnackBar";
import "./CartPage.scss";
class CartPage extends React.Component< any, any> {
  state = {
    openMessgeContainer : false,
    message : ''
  }
  handleCartCount = (productObj, key) => {
    let { addProductToCart, addedCartProduct, updateCartProdcutList } = this.props;
    let updateProdcut = []
    if(key == "1") {
      this.triggerMsg( productObj.name +' successfully added into Cart');
      addProductToCart(productObj);
    } else if(key == "0"){
      let isCheckCount = 0;
      updateProdcut = addedCartProduct.filter((item) => { 
        if(JSON.stringify(item) == JSON.stringify(productObj) && isCheckCount == 0){
          isCheckCount =1;
          return false;
        } else {
          return true;
        } 
      });
      updateCartProdcutList(updateProdcut);
      this.triggerMsg( productObj.name +' successfully removed 1 item from Cart');
    } else {
      this.triggerMsg( productObj.name +' successfully removed from Cart');
      updateProdcut = addedCartProduct.filter((item) => JSON.stringify(item) != JSON.stringify(productObj));
      updateCartProdcutList(updateProdcut);
    }
  }
  uniqueData = () => {
    let { addedCartProduct } = this.props;
    let uniques = [];
    let itemsFound = {};
    for(let val of addedCartProduct) {
        let stringified = JSON.stringify(val);
        if(itemsFound[stringified]) { 
          continue; 
        }
        uniques.push(val);
        itemsFound[stringified] = true;
    }
    return uniques;
  }
  uniqueDataCount = (obj) => {
    let { addedCartProduct } = this.props;
    let productCount = 0;
    for(let val of addedCartProduct) {
        if(JSON.stringify(obj) == JSON.stringify(val)) {
          productCount++;
        }
    }
    return productCount;
  }
  getPercentage = (num, per) => {
    let a = (num/100)*per;
    return Math.ceil(a);
  }
  totalPriceCount = () => {
    let { addedCartProduct } = this.props;
    let cartCount = 0;
    let cartDiscountCount = 0;
    for(let val of addedCartProduct) {
      cartCount = cartCount + val.price.actual;
      cartDiscountCount = cartDiscountCount + this.getPercentage(val.price.actual, val.discount);
    }
    let totalPrice = cartCount - cartDiscountCount;
    return { cartCount , cartDiscountCount, totalPrice };
  }
  triggerMsg = (msg) => {
      this.setState({
          openMessgeContainer: true,
          open: false,
          message: msg,
      });
      setTimeout(() => {
          this.setState({
              openMessgeContainer: false
          })
      }, 5000);
  }
  render() {
    let { addedCartProduct } = this.props;
    let { openMessgeContainer, message } = this.state;
    const cartUniqueProduct = this.uniqueData();
    const cartPriceData = this.totalPriceCount();
    return (
      <Grid container spacing={2} className="cart-page">
          <Grid item xl={8} lg={8} xs={12} sm={12} className="cart-page-lt">
              <Hidden only={['xs', 'sm']}>
              {cartUniqueProduct.length > 0 ? cartUniqueProduct.map((row, index) => (
                <CartProduct uniqueDataCount={this.uniqueDataCount} handleCartCount={this.handleCartCount} product={row} />
              )) : <Grid item > No Product Found </Grid>}   
              </Hidden>
              <Hidden only={['md', 'lg']}>
              {cartUniqueProduct.length > 0 ? cartUniqueProduct.map((row, index) => (
                <CartProductMobile uniqueDataCount={this.uniqueDataCount} handleCartCount={this.handleCartCount} product={row} />
              )) : <Grid item > No Product Found </Grid>}  
              </Hidden>
          </Grid>
          <Grid item xl={4} lg={4} xs={12} sm={12} className="cart-page-rt">
              <CartPriceDetails cartProduct={addedCartProduct} cartPriceData={cartPriceData} />
          </Grid>
          {openMessgeContainer && <SnackbarComponent open={openMessgeContainer} message={message}/> }
      </Grid>    
    );
  }
}

export default Container(CartPage);