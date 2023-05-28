import '../styles/shoppingcart.css';
import { Link } from 'react-router-dom';
export function ShoppingCart({
  sidebar,
  setSidebar,
  cartProducts,
  setCartProducts,
  setCartNum,
}) {
  let total = 0;

  const closeSidebar = () => {
    setSidebar(false);
  };

  const calculateTotal = (price, quantity) => {
    total = total + price * quantity;
  };

  const removeFromCart = (productId) => {
    setCartProducts((cartProducts) => {
      return cartProducts.filter((item) => item.id !== productId);
    });
    setCartNum((prevState) => prevState - 1);
  };
  return (
    <>
      <div
        className={`overlay-div ${sidebar ? 'show-overlay' : ''}`}
        onClick={closeSidebar}
      ></div>
      <div className={`shopping-cart-container ${sidebar ? 'show' : ''}`}>
        <div className='close-btn' onClick={closeSidebar}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </div>
        {cartProducts &&
          (cartProducts.length > 0 ? (
            <>
              {cartProducts.map((item) => (
                <div key={item.id} className='product-box'>
                  <Link to={`/shop/${item.id}`} onClick={closeSidebar}>
                    <img
                      className='shopping-cart-img'
                      src={require(`../assets/watch${item.id}.jpg`)}
                      alt=''
                    ></img>
                  </Link>
                  <div className='price-quantity'>
                    <p>
                      <strong>Price: </strong> {item.price}
                    </p>
                    <p>
                      <strong>Quantity: </strong> {item.quantity}
                    </p>
                  </div>
                  <div
                    className='remove-btn'
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className='fa fa-trash' aria-hidden='true'></i>
                  </div>
                  {calculateTotal(item.price, item.quantity)}
                </div>
              ))}
              <h1>Total: {total}$</h1>
              <button className='checkout-btn'>Checkout</button>
            </>
          ) : (
            <>
              <h1>Your cart is empty</h1>
              <Link className='link-to-shop' to='/shop' onClick={closeSidebar}>
                Shop Now
              </Link>
            </>
          ))}
      </div>
    </>
  );
}
