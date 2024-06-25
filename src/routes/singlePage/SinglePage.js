import { Slider } from '../../components/slider/Slider';
import './SinglePage.scss';
import { pdpPage, userData } from '../../../src/lib/dummydata';
import { Map } from '../../components/map/Map';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const SinglePage = () => {

  // const data = listData;

  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={pdpPage.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{pdpPage.title}</h1>
                <div className="address">
                  <img src="assets/location.png" alt="" />
                  <span>{pdpPage.address}</span>
                </div>
                <div className="price">$ {pdpPage.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {pdpPage.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="list vertical">
            <div className="feature">
              <img src="assets/utility.png" alt="" />
              <div className="featureTxt">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="assets/pet.png" alt="" />
              <div className="featureTxt">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="assets/fee.png" alt="" />
              <div className="featureTxt">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="list horizontal">
            <div className="feature">
              <img src="/assets/size.png" alt="" />
              <p>80sqft</p>
            </div>
            <div className="feature">
              <img src="/assets/bed.png" alt="" />
              <p>2 Beds</p>
            </div>
            <div className="feature">
              <img src="/assets/bath.png" alt="" />
              <p>1 Bathroom</p>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="list horizontal">
            <div className="feature">
              <img src="/assets/school.png" alt="" />
              <div className="text">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/pet.png" alt="" />
              <div className="text">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/fee.png" alt="" />
              <div className="text">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[pdpPage]} />
          </div>
          <div className="buttons">
            <button className='button'>
              <img src="/assets/chat.png" alt="" />Send a Message
            </button>
            <button className='button'>
              <img src="/assets/save.png" alt="" />Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
