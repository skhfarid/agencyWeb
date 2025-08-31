import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
import datas from '../../data/seo.json'
import './design.css'


export const Seo = () => {
  return (
    <div className='container seo design'>
        <div className="intro"  data-aos='fade-up' data-aos-duration="1000">
            <div className="text">
                <h1>SEO</h1>
                <p>We deliver search engine optimization materials that are 
                tailored to meet your business objectives.</p>
            </div>
        </div>
        <div className="content">
            {datas.map(data => 
                <div className="card" key={data.id} data-aos='fade-up' data-aos-duration="1000">
                    <div className="img">
                        <img src={data.imgUrl} alt={data.heading} />
                    </div>
                    <div className="card-text">
                        <h3>{data.heading}</h3>
                        <p>{data.text}</p>
                    </div>
                </div>
            )} 
        </div>
        <div className="flexex">
            <div className="flex">
            <Link to='/web'>
                <div data-aos='fade-up' data-aos-duration="1000" className="designs web">
                    <div className="design-text">
                        <h2>web development</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
            </div>
            <div className="flex">
                <Link to='/app'>
                    <div data-aos='fade-up' data-aos-duration="1000" className="designs app">
                        <div className="design-text">
                            <h2>app design</h2>
                            <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        
    </div>
  )
}
