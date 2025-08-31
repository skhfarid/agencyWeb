import { Link } from 'react-router-dom'
import logo from '../../assets/logo/sfLogo.png'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import './footer.css'


export const FooterLink = () => {
  return (
    <div className="footer-link">
        <div className="list">
            <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
            <nav className='link'>
                <ul>
                    <li>
                        <Link to='/company'>Our Company</Link>
                    </li>
                    <li>
                        <Link to='/location'>Location</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="details">
            <div className="detail">
                <div className="detail-item">
                    <p className="bold opac">sFarid Web Dev</p>
                    <p className="">Shreerampur, Chandanpat, Rangpur Sadar</p>
                    <p className=""> Rangpur-5431</p>
                </div>
                <div className="detail-item">
                    <p className="bold opac">Contact Us (Central Office)</p>
                    <p className=" bold">P : +8801750645894</p>
                    <p className=" bold">E : mdsheikhfaridh@gmail.com</p>
                </div>
            </div>
            <div className="social">
                <ul role='list'>
                    <li>
                        <a href="https://www.facebook.com/farid.msfh/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="social-icon-facebook" role="img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@faridmsfh" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="social-icon-youtube" role="img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/farid_msfh" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="social-icon-twitter" role="img" />
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <img src={pinterest} alt="social-icon-pinterest" role="img" />
                        </a>
                    </li> */}
                    <li>
                        <a href="https://www.instagram.com/farid.msfh/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="social-icon-instagram" role="img" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
