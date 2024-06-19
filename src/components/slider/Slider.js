import './Slider.scss';
import { useState } from 'react';
export const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlider = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1)
      }
      else {
        setImageIndex(imageIndex - 1);
      }
    }
    else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      }
      else {
        setImageIndex(imageIndex + 1);
      }
    }
  }
  return (
    <div className="slider">
      {imageIndex !== null && <div className="fullSlider">
        <div className="arrow" onClick={()=>changeSlider("left")}>
          <img src="/assets/arrow.png" alt="" />
        </div>

        <div className="fullImgContainer">
          <img src={images[imageIndex]} alt="" />
        </div>

        <div className="arrow" onClick={()=>changeSlider("right")}>
          <img src="/assets/arrow.png" alt="" className='rightArrow' />
        </div>

        <div className="close" onClick={() => setImageIndex(null)}>X</div>
      </div>}
      <div className="bigImg">
        <img src={images[0]} alt="" onClick={() => { setImageIndex(0) }} />
      </div>
      <div className="smallImg">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => { setImageIndex(index + 1) }} />
        ))}
      </div>
    </div>
  )
}
