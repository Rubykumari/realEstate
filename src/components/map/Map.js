import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.scss';
import "leaflet/dist/leaflet.css";
import { Pin } from '../pin/Pin';

export const Map = ({items}) => {
    const ramPosition = [23.652369, 85.561211];
     
  return (
    <MapContainer center={ramPosition} zoom={10} scrollWheelZoom={true} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
        <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}
