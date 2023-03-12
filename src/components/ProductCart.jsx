import React from "react";

export function ProductContainer({ product, setCount, count }) {
  return (
    <div className="productCard">
      <div className="productInfo">
        <div className="productCardTitle">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <img
          id="imageAssortment"
          src={product.image}
          alt={product.description}
        />
        <button className="buyButton" onClick={() => setCount(count + 1)}>
          B U Y
        </button>
      </div>
    </div>
  );
}

export default ProductContainer;
