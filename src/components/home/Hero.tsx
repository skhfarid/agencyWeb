import { Link } from 'react-router-dom'
import hero from '../../assets/home/desktop/homeHero.png'
import './home.css'
export const Hero = () => {
  return (
    <main>
      <div className='hero'>
        <div className="mesg">
            <div className='text-mesg'>
            <h1>Turning your vision into reality with professional web design, seamless functionality, and engaging user experiences.</h1>
            <h3>With over 04 years in the industry, we are experienced
               in creating fully responsive websites, app design, and engaging brand 
               experiences. Find out more about our services.</h3>
              <button className='btn btn-light'>
                <Link to='/company'>learn more</Link>
              </button>
            </div>
        </div>
        <div className="img">
            <img src={hero} alt="hero-background"  />
        </div>
      </div>
    </main>
  )
}
