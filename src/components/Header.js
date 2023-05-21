import '../styles/header.css';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <div className='header'>
      <div className='links'>
        <Link to='/homepage'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <a href=''>
          <i className='fa fa-shopping-cart' aria-hidden='true'></i>
        </a>
      </div>
    </div>
  );
}
