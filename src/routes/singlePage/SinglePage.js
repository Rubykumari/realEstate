import { Slider } from '../../components/slider/Slider';
import './SinglePage.scss';
import { pdpPage, userData } from '../../../src/lib/dummydata';

export const SinglePage = () => {
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

        </div>
      </div>
    </div>
  )
}
