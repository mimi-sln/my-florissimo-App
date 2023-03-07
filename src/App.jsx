import { useState } from "react";
import "./App.css";
import ProductCart from "./ProductCart";
const productArray = [
  {
    id: 1,
    name: "calathea",
    price: "CHF 29.90",
    image: "https://images.unsplash.com/photo-1597055181321-71de4e5ec627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    description: "the living tree",
  },
  {
    id: 2,
    name: "codiaeum",
    price: "CHF 29.90",
    image: "https://images.unsplash.com/photo-1602668080102-eb805a0daa76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    description: "a.k.a croton plant",
  },
  {
    id: 3,
    name: "lime",
    price: "CHF 29.90",
    image: "https://images.unsplash.com/photo-1653600015318-19bd60546c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    description: "organic home-made",
  },
  {
    id: 4,
    name: "limone",
    price: "CHF 29.90",
    image: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "the refresher",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Florissimo</h1>
      <h2>The Flower Shop</h2>
      <h3 className="shopping cart">shopping cart: {count}</h3>
      <div className="shopping-list">
        {productArray.map((product) => 
          <ProductCart
            product={product}
            setCount={setCount}
            count={count}
            key={product.id}
          />
        )}
      </div>
    </div>
  );
}

export default App