import '../styles/header.css';
import { Link } from 'react-router-dom';
export function Header({ setSidebar, cartNum }) {
  const displaySidebar = () => {
    setSidebar(true);
  };
  return (
    <div className='header'>
      <div className='links'>
        <Link to='/homepage'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <div className='shopping-cart-icon-container'>
          <i
            onClick={() => {
              displaySidebar();
            }}
            className='fa fa-shopping-cart'
            aria-hidden='true'
            style={{ color: 'white' }}
          ></i>
          {cartNum !== 0 ? (
            <div className='num-of-items'>{cartNum}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
