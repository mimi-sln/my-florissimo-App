import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductPage = ({products, addItem}) => 
{
    const {id} = useParams();

    const product = products.filter((product) => product.id.toString() === id)[0]
    return (
        <div className="spp">          
            <img className="" src={product.image}/>
            <div>
                {/*<h2>{product.name}</h2>*/}
                <h2>{product.description}</h2>
                <h3>{product.price}</h3>
                <button onClick={() => addItem(product)}>add to cart</button>
            </div>
        </div>
    )
}

export default ProductPage;



