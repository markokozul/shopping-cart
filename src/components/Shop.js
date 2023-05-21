import '../styles/shop.css';
import { Watch } from './Watch';

export function Shop() {
  return (
    <div className='shop-container'>
      <div className='watches-container'>
        <Watch num={1} />
        <Watch num={2} />
        <Watch num={3} />
      </div>
    </div>
  );
}
