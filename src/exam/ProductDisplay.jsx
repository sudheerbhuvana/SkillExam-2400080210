import { useState } from 'react';
import productsData from '../products.json';

function ProductDisplay() {
 
  const [products, setProducts] = useState(productsData);

  return (
    <div>
      <h2>Product List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDisplay;
