import {Link, NavLink, Outlet} from 'react-router-dom'
import ShoppingCart from '../components/shoppingCart'
import '../index.css'

const RootLayout = ({totalItems}) => {
  return (
    <div className="app">
        <div className="App">
        <nav className='navbar'>
       
              <h3 className="basket">you are taking home {totalItems} plants.</h3>
              <div className='links'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
              <NavLink to="cart"><ShoppingCart totalItems={totalItems}/></NavLink>
        </div>
    </nav>

        <h1 id="shopname">FLORISSIMO</h1>
        <h2 id="subtitle">The Flower Shop</h2>
      </div>
      <Outlet />
  </div>
  );
};

export default RootLayout;