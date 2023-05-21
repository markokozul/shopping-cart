import { useParams } from 'react-router-dom';
import '../styles/watchdetails.css';
export function WatchDetails() {
  const routeParams = useParams();

  return (
    <div className='watch-details-container'>
      <div
        className='watch-details-box-1'
        style={{
          backgroundImage: `url(${require(`../assets/watch${routeParams.id}.jpg`)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='watch-details-box-2'>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}
