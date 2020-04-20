import * as React from 'react';
import "./SortBy.scss"

function SortBy(props) { 
  let { sortByPrice, selectedItem } = props;
  return (
    <>
    <ul className="sort-by-block">
      <li className="sort-by-title">Sort By</li>
      <li className={selectedItem == 1 ? 'sort-by-block-slt' : ''} onClick={() => sortByPrice(1)}> Price -- High Low </li>
      <li className={selectedItem == 2 ? 'sort-by-block-slt' : ''} onClick={() => sortByPrice(2)}> Price -- Low High </li>
      <li className={selectedItem == 3 ? 'sort-by-block-slt' : ''} onClick={() => sortByPrice(3)}> Discount </li>
    </ul>
    </>
  );
}

export default SortBy;