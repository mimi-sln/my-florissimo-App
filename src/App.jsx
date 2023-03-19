import { useState } from "react";
import './index.css'
import {createBrowserRouter, RouterProvider, Route, Link,  useParams, createRoutesFromElements} from "react-router-dom";

import productArray from "./data";
import RootLayout from "./layouts/RootLayout"
import ShoppingCart from "./components/shoppingCart";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductList from  "./components/ProductList";

function App() 
{
  const [countArticles, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([])

  const addItem = (product) => {
    setCartItems([...cartItems, product])
  }
  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((cartItem)=> cartItem.id !== id )
    )
  }

  const routerArray = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout totalItems={cartItems.length}/>} >
        <Route index element={ <ProductList addItem={addItem}  products={productArray} count={countArticles} setCount={setCount} /> } /> 
        <Route path='about' element={<AboutPage/>}/>
        <Route path='cart' element={<ShoppingCart cartItems={cartItems} removeItem={removeItem}/>}/> 
        <Route path='product/:id/' element={<ProductPage products={productArray} addItem={addItem} />}/>
        </Route>
    )
  )
  return (
    <RouterProvider router={routerArray} />
   );
 }
 
 export default App
  