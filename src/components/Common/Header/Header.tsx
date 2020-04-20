import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Grid, TextField } from '@material-ui/core';
import Container  from './../../../container/index';
import CartIcon from './../../CartIcon/CartIcon';
import Search from './../../Search/Search'
import { Link } from 'react-router-dom';
import "./Header.scss";

class Header extends React.Component<any , any> {
    state = {
        isSearch : false,
        searchStr : '',
        isShow : true
    }
    toggleSearchBar = () => {
        let { allProducts, updateProdcutList } = this.props;
        let { isSearch } = this.state;
        if(isSearch) {
            let payload = {
                selectedItem : 0,
                items : allProducts
              };
            updateProdcutList(payload);
            this.setState({ isSearch : false });
        } else {
            this.setState({ isSearch : true });
        }
    }
    render(){
        let { isSearch, isShow } = this.state;
        let { addedCartProduct, updateProdcutList, allProducts } = this.props;
        return (
            <Grid id="header" className="header" container>
                <Grid item sm={2} xs={2}>
                    <Grid container alignItems="flex-start">
                        <Grid item>
                        <Link to="/ListPage">
                            <button className="logo-icon cursor-pt"><FontAwesomeIcon icon={faStar} /></button>
                        </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} sm={10}>
                    {isShow && <Grid container alignItems="flex-end" direction="row" justify="flex-end" spacing={2}>
                        <Search isSearch={isSearch} updateProdcutList={updateProdcutList} toggleSearchBar={this.toggleSearchBar} allProducts={allProducts} />
                        <Grid item>
                            <CartIcon cartCount={addedCartProduct.length} />
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
        )
    }
}
export default Container(Header);