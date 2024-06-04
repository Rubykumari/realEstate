import { Icon } from 'leaflet';
import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export const Pin = ({item}) => {

    const myIcon = new Icon({
        iconUrl: 'assets/location.png',
        iconSize: [38,38]
     });

  return (
    <Marker position={[item.latitude,item.longitude]} icon={myIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  )
}
