import {React} from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.scss';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

export const Map = () => {
    const position = [24.829992, 85.884438];
    const myIcon = L.icon({
        iconUrl: 'assets/location.png',
        iconSize: [38,38]
     });
     
  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={true} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={myIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}
