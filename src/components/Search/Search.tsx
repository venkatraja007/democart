import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Grid, TextField } from '@material-ui/core';

function Search(props) {
  let { isSearch, updateProdcutList, allProducts, toggleSearchBar } = props;
  const searchProduct = (e) => {
      let updateProdcut = allProducts.filter(item=>item.name.toLowerCase().includes(e.target.value));
      let payload = {
          selectedItem : 0,
          items : updateProdcut
        };
      updateProdcutList(payload);
  }
  return (
    <>
     {isSearch ? <Grid className="search-box-mb" item>
          <TextField onKeyPress={searchProduct} />
          <button onClick={() => toggleSearchBar()} className="search-icon cursor-pt">
              <FontAwesomeIcon icon={faSearch} />
          </button>
      </Grid> : 
      <Grid item>
          <button onClick={() => toggleSearchBar()} className="search-icon cursor-pt">
              <FontAwesomeIcon icon={faSearch} />
          </button>
      </Grid>}
    </>
  );
}

export default Search;