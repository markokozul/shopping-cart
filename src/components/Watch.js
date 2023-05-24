import { Link } from 'react-router-dom';
export function Watch({ num }) {
  return (
    <div className='watch-box'>
      <div className='img'>
        <Link to={`/shop/${num}`}>
          <img src={require(`../assets/watch${num}.jpg`)} alt=''></img>
          <p className='see-more'>See More</p>
        </Link>
      </div>
      <p>Lorem Ipsum{num}</p>
      <p>{num * 100}$</p>
    </div>
  );
}
