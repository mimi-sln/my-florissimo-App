const ShoppingCart = ({totalItems}) => {
    return (
      <h3 className='cart'> <span className="cart-icon">shopping cart: </span> <span className="cart-items">{totalItems}</span></h3>
    )
}

export default ShoppingCart;