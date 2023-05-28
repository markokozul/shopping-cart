import { useParams } from 'react-router-dom';
import '../styles/watchdetails.css';
import { useContext, useState } from 'react';
import { Context } from '../App';
export function WatchDetails() {
  const { setCartNum, setCartProducts, cartProducts } = useContext(Context);
  const routeParams = useParams();

  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    if (!cartProducts.some((item) => item.id === routeParams.id)) {
      setCartProducts((cartProducts) => [
        ...cartProducts,
        { id: routeParams.id, price: routeParams.id * 100, quantity: quantity },
      ]);
      setCartNum((prevState) => prevState + 1);
    } else {
      //update quantity value if it changed
      const index = cartProducts.findIndex(
        (item) => item.id === routeParams.id
      );
      let newArr = cartProducts;
      newArr[index] = {
        ...newArr[index],
        quantity: quantity,
      };

      setCartProducts(newArr);
    }
  };
  const handleQuantity = (e) => {
    if (e.target.className === 'increment' && quantity < 100) {
      setQuantity((quantity) => quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity((quantity) => quantity - 1);
      }
    }
  };
  return (
    <div className='watch-details-container'>
      <div
        className='watch-details-box-1'
        style={{
          backgroundImage: `url(${require(`../assets/watch${routeParams.id}.jpg`)})`,
        }}
      >
        <div className='filler'></div>
      </div>
      <div className='watch-details-box-2'>
        <h1>Lorem Ipsum{routeParams.id}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi facilis
          dolorum porro quam ad praesentium! Quos eligendi pariatur sint
          laudantium magni libero cum magnam maiores, deleniti aut est
          distinctio et!
        </p>
        <h1>{parseInt(routeParams.id) * 100}$</h1>
        <div className='quantity'>
          <button className='decrement' onClick={handleQuantity}>
            -
          </button>
          <p>{quantity}</p>
          <button className='increment' onClick={handleQuantity}>
            +
          </button>
        </div>
        <button onClick={addToCart} className='add-to-cart-btn'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
