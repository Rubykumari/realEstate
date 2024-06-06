import { Icon } from 'leaflet';
import './pin.scss';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

export const Pin = ({ item }) => {

  const myIcon = new Icon({
    iconUrl: require("../../img/pin.png"),
    iconSize: [38, 38]
  });

  return (
    <Marker position={[item.latitude, item.longitude]} icon={myIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="txtContainer">
            <Link to={`/${item.title}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}
