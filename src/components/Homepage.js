import '../styles/homepage.css';
import { Link } from 'react-router-dom';
export function Homepage() {
  return (
    <div className='homepage-container'>
      <div className='box-1'>
        <h1>Elegant Watches.</h1>
        <Link to='/shop'>Shop Now</Link>
      </div>
      <div className='box-2'></div>
    </div>
  );
}
