import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const App = () => {
  // TODO: Define initial product data
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "$999", inStock: true },
    { id: 2, name: "Phone", price: "$699", inStock: false },
    { id: 3, name: "Tablet", price: "$499", inStock: true }
  ]);
  // TODO: Implement state to manage filtering
  function handleRemove(id) {
    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts(updatedProducts)
  }
  // TODO: Implement logic to filter products based on availability
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (filter === "in") {
      return product.inStock;
    }
    if (filter === "out") {
      return !product.inStock;
    }
    return true;
  });

  return (
    <Container>
      <h1>Product Dashboard</h1>
      <Stack direction="row" spacing={2}>
      {/* TODO: Add buttons to allow filtering by availability */}
        <Button variant="contained" onClick={() => setFilter("all")}>All</Button>
        <Button variant="contained" onClick={() => setFilter("in")}>In Stock</Button>
        <Button variant="contained" onClick={() => setFilter("out")}>Out of Stock</Button>
      </Stack>
      <ProductList products={filteredProducts} handleRemove={handleRemove} />
      
    </Container>
  );
};

export default App;
