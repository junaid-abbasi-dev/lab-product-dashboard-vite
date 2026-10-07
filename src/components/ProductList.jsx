import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, handleRemove }) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (products.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <div>
      {products.map(p => <ProductCard key={p.id} product={p} handleRemove={handleRemove}/>)}
    </div>
  );
};

export default ProductList;
