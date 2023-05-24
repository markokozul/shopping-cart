import '../styles/shoppingcart.css';

export function ShoppingCart({
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

    console.log(cartProducts);
  };
  return (
    <div className='shopping-cart-container'>
      <div className='close-btn' onClick={closeSidebar}>
        <i className='fa fa-times' aria-hidden='true'></i>
      </div>
      {cartProducts &&
        (cartProducts.length > 0 ? (
          <>
            {cartProducts.map((item) => (
              <div key={item.id} className='product-box'>
                <img
                  className='shopping-cart-img'
                  src={require(`../assets/watch${item.id}.jpg`)}
                  alt=''
                ></img>
                <div>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>X</button>
                {calculateTotal(item.price, item.quantity)}
              </div>
            ))}
            <h1>Total: {total}$</h1>
            <button>Checkout</button>
          </>
        ) : (
          <p>Your cart is empty</p>
        ))}
    </div>
  );
}
