import React from "react";

export function ProductCart({product, setCount, count }) {
    return (
      <div className="productCard">
        <div className="flowerInfo">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <img
          src={product.image} alt={product.description}
        />
        <button onClick={() => setCount(count + 1)}>B U Y</button>
      </div>
    );
  }

  export default ProductCart;