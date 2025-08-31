import rangpur from '../../assets/about/rangpur.png'
import dhaka from '../../assets/about/dhaka.png'
import gazipur from '../../assets/about/gazipur.png'
import { Link } from 'react-router-dom'

export const Location = () => {
  return (
    <div className="main">
        <div className="locations">
            <div className="location">
                <div className="location-img one" data-aos='zoom-in' data-aos-duration="1000">
                    <img src={rangpur} alt="rangpur-image" />
                </div>
                <div className="text" data-aos='fade-up' data-aos-duration="1000">
                    <h3>Rangpur</h3>
                    <button className='btn btn-dark'>
                        <Link to='/location'>see location</Link>
                    </button>
                </div>
            </div>
            <div className="location">
                <div className="location-img two" data-aos='zoom-in' data-aos-duration="1000">
                    <img src={dhaka} alt="dhaka-image" />
                </div>
                <div className="text" data-aos='fade-up' data-aos-duration="1000">
                    <h3>dhaka</h3>
                    <button className='btn btn-dark'>
                        <Link to='/location'>see location</Link>
                    </button>
                </div>
            </div>
            <div className="location">
                <div className="location-img three" data-aos='zoom-in' data-aos-duration="1000">
                    <img src={gazipur} alt="gazipur-image" />
                </div>
                <div className="text" data-aos='fade-up' data-aos-duration="1000">
                    <h3>Gazipur</h3>
                    <button className='btn btn-dark'>
                        <Link to='/location'>see location</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
