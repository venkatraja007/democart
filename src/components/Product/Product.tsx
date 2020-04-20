import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Grid, Button } from '@material-ui/core';
import './Product.scss';
function Product(props) {
  let { product, addProductToCart } = props;
  let { name, image, price, discount} = product;
  return (
      <>
      <Card>
        <CardActionArea>
          <picture>
                  <img alt="test" className="product-img" src={image} />
          </picture>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <p className="product-title">{name}</p>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div className="product-price-block">
                    <div className="new-price">
                    <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button>{price.actual}
                    </div>
                    <div className="old-price">
                    <button className="price-symbol"><FontAwesomeIcon icon={faRupeeSign} /></button>{price.display}
                    </div>
                    <div className="price-offer">
                        {discount}% off
                    </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions className="add-to-cart-section">
          <Button onClick={() => addProductToCart(product)} className="add-to-cart-btn" size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default Product;