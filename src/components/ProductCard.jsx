import React from 'react';
import styles from '../styles/ProductCard.module.css';
import Button from '@mui/material/Button';
const ProductCard = ({ product, handleRemove }) => {
  return (
    <div className={product.inStock ? styles.card : `${styles.card} outOfStockClass`}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      <h1>{product.name}</h1>

      <p>{product.price}</p>
      <Button variant="contained" onClick={() => handleRemove(product.id)}>
        Remove
      </Button>
      <p>{product.inStock ? "In Stock" : "Out Of Stock"}</p>
      
    </div>
  );
};

export default ProductCard;
