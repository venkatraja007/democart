import * as React from 'react';
import { Grid, Hidden, Button } from '@material-ui/core';
import FilterBy from "./../FilterBy/FilterBy";
import SortBy from "./../SortBy/SortBy";
import './ListPage.scss';
import Container  from './../../container/index';
import Product from "./../Product/Product";
import SnackbarComponent from "./../Common/SnackBar/SnackBar";
import SortByMobile from "./../SortBy/SortByMobile";
import FilterByMobile from "./../FilterBy/FilterByMobile";
class ListPage extends React.Component< any , any> {
  state = {
    openMessgeContainer : false,
    message : '',
    fromPrice : 1000,
    toPrice : 10000,
    isShow : false,
    isShowFilter : false
  }
  addProductToCart = (productObj) => {
    this.triggerMsg( productObj.name +' successfully added into Cart');
    let { addProductToCart } = this.props;
    addProductToCart(productObj);
  }

  sortByPrice = (sortKey) => {
    let { listProducts } = this.props;
    let updateProdcut = []
    if(sortKey == "1") {
      updateProdcut = listProducts.sort((a, b) => b.price.actual - a.price.actual );
    } else if(sortKey == "2"){
      updateProdcut = listProducts.sort((a, b) => a.price.actual - b.price.actual );
    } else {
      updateProdcut = listProducts.sort((a, b) => b.discount - a.discount );
    }
    let { updateProdcutList } = this.props;
    let payload = {
      selectedItem : sortKey,
      items : updateProdcut
    }
    updateProdcutList(payload);
    this.setState({ isShow : false });
  }
  filterByPrice = () => {
    let { fromPrice, toPrice } = this.state;
    let { allProducts, updateProdcutList } = this.props;
    let updateProdcut = []
    updateProdcut = allProducts.filter((item) => { 
      if(item.price.actual > fromPrice && item.price.actual < toPrice ){
        return true;
      } else {
        return false;
      } 
    });
    let payload = {
      selectedItem : 0,
      items : updateProdcut
    };
    updateProdcutList(payload);
    this.setState({ isShowFilter : false });
  }
  handleFilterPrice = (price) => {
    this.setState({ fromPrice: price[0] , toPrice: price[1] });
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
  isOpenSortBy = () => {
    this.setState({ isShow : true });
  }
  handleClose = () => {
    this.setState({ isShow : false, isShowFilter: false });
  }
  isOpenFilterBy = () => {
    this.setState({ isShowFilter : true });
  }
  render() {
    let { listProducts, selectedItem } = this.props;
    let { openMessgeContainer, message, isShow, isShowFilter } = this.state;
    return (
        <Grid container className="list-page">
            <Hidden only={['sm', 'xs']}>
              <Grid container item lg={2} xl={2} >
                  <Grid className="filter-block" item lg xl >
                      <p className="filter-title"> Filters </p>
                      <FilterBy handleFilterPrice={this.handleFilterPrice}/>
                      <Button className="filter-apply-btn" variant="contained" color="primary" onClick={() => this.filterByPrice()}> Apply </Button>
                  </Grid>
              </Grid>
            </Hidden>
            <Hidden only={['md', 'lg']}>
              <Grid className="filter-mb" container item xs={12} sm={12} >
                      <Grid className="sort-txt cursor-pt" item xs={6} sm={6}>
                          <span onClick={() => this.isOpenSortBy()}>Sort </span>
                      </Grid>
                      <Grid className="filter-txt cursor-pt" item xs={6} sm={6}>
                          <span onClick={() => this.isOpenFilterBy()}>Filter </span>
                      </Grid>
              </Grid>
            </Hidden>
            <Grid container spacing={3} item lg={10} sm={12} xs={12} xl={10} >
                    <Hidden only={['sm', 'xs']}>
                      <Grid item lg={10}>
                        <SortBy sortByPrice={this.sortByPrice} selectedItem={selectedItem} />
                      </Grid>
                    </Hidden>
                    {listProducts.length > 0 ? listProducts.map((row, index) => (
                    <Grid item lg={3} xl={3} xs={6} sm={6}>
                      <Product addProductToCart={this.addProductToCart} product={row} />
                    </Grid>
                    )) : <Grid item lg={3} xl={3} xs={6} sm={6} className="no-data-found" > <div >
                      No Data Found </div></Grid> }
            </Grid>
            {openMessgeContainer && <SnackbarComponent open={openMessgeContainer} message={message}/> }
            {isShow && <SortByMobile handleClose={this.handleClose} sortByPrice={this.sortByPrice} selectedItem={selectedItem} />}
            {isShowFilter && <FilterByMobile handleClose={this.handleClose} handleFilterPrice={this.handleFilterPrice} filterByPrice={this.filterByPrice} />}
        </Grid>
    );
  }
}

export default Container(ListPage);