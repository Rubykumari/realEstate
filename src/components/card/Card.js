import { Link } from 'react-router-dom';
import './Card.scss';

export const Card = ({ item }) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imgContainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className="txtContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="assets/location.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="assets/bed.png" alt="" />
              <span>{item.bedRoom} bedroom</span>
            </div>
            <div className="feature">
              <img src="assets/bath.png" alt="" />
              <span>{item.bathRoom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="assets/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="assets/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
