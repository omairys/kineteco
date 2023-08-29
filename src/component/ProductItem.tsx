import React from 'react';
import { ProductInterface } from '../kineteco.models';

const ProductItem = ({ dynamicSlug, productName } : ProductInterface) => {
    return (
      <li className="product-item">
        <img className="product-image" src={`images/products/${dynamicSlug}`} alt={`${productName} - Product`} />
        <h2 className="product-name">{productName}</h2>
      </li>
    );
}

export default ProductItem;