import {Link} from "react-router-dom";

const ProductContainer = ({product, addItem}) => {
  console.log(product)
  
  return (
    <div className="productCard">
      <div className="productInfo">
        <div className="productCardTitle">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <Link to={"product/"+product.id}> 
          <img
            id="imageAssortment"
            src={product.image}
            alt={product.description}
          />
        </Link>
        {/*<h3>{product.price}</h3>*/}
        <button className="buyButton" onClick={() => addItem(product)}>
          B U Y
        </button>
      </div>
    </div>
  );
}

export default ProductContainer;
