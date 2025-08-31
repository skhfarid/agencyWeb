import { MapContainer,Marker, TileLayer, Popup } from 'react-leaflet'
import './location.css'
// import { Marker } from 'leaflet'


export const Location = () => {
    let positionCN: [number, number] = [25.744860, 89.275589]
    let positionUK: [number, number] = [23.780546, 90.426659]
    let positionAU: [number, number] = [23.99296,90.27770]

  return (
    <div className="mainn">
        <div className="locate">
            <div className="locates flip" data-aos='fade-up' data-aos-duration="1000">
                <div className="img canada">
                    <MapContainer center={positionCN} zoom={6}
                        doubleClickZoom="center"
                        scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            tileSize={512}
                            maxZoom={12}
                            zoomOffset={-1}
                        
                            />
                        <Marker position={positionCN} 
                        riseOnHover={true}>
                            <Popup>
                            <p>Chandanpat, Rangpur Sadar<br/>
                            Rangpur-5431</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="locate-mesg">
                    <h2>Rangpur</h2>
                    <div className="text" data-aos='zoom-in' data-aos-duration="1000">
                        <div className="office">
                            <p className="bold">sFarid web dev Office</p>
                            <p>Chandanpat, Rangpur Sadar</p>
                            <p>Rangpur-5431</p>
                        </div>
                        <div className="contact">
                            <p className="bold">Contact</p>
                            <p>P : +8801750645894</p>
                            <p>E : mdsheikhfaridh@gmail.com</p>
                        </div> 
                    </div>
                </div> 
            </div>
            <div className="locates" data-aos='fade-up' data-aos-duration="1000">
                <div className="img au">
                <MapContainer center={positionAU} zoom={6}
                        doubleClickZoom="center"
                        scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            tileSize={512}
                            maxZoom={12}
                            zoomOffset={-1}
                        
                            />
                        <Marker position={positionAU} 
                        riseOnHover={true}>
                            <Popup>
                                <p>Linked Road, Moddo Badda<br/>
                                Dhaka-1212</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="locate-mesg">
                    <h2>Dhaka</h2>
                    <div className="text" data-aos='zoom-in' data-aos-duration="1000">
                        <div className="office">
                            <p className="bold">sFarid web dev Dhaka Office</p>
                            <p>Linked Road, Moddo Badda</p>
                            <p>Dhaka-1212</p>
                        </div>
                        <div className="contact">
                            <p className="bold">Contact</p>
                            <p>P : +8801750645894</p>
                            <p>E : mdsheikhfaridh@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="locates flip" data-aos='fade-up' data-aos-duration="1000">
                    <div className="img uk">
                    <MapContainer center={positionUK} zoom={6}
                        doubleClickZoom="center"
                        scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            tileSize={512}
                            maxZoom={12}
                            zoomOffset={-1}
                        
                            />
                        <Marker position={positionUK} 
                        riseOnHover={true}>
                            <Popup>
                            <p>Shirirchala, Bhabanipur, Joydebpur<br/>
                            Gazipur-1704</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                <div className="locate-mesg">
                    <h2>Gazipur</h2>
                    <div className="text" data-aos='zoom-in' data-aos-duration="1000">
                        <div className="office">
                            <p className="bold">sFarid web dev Gazipur Office</p>
                            <p>Shirirchala, Bhabanipur, Joydebpur</p>
                            <p>Gazipur-1704</p>
                        </div>
                        <div className="contact">
                            <p className="bold">Contact</p>
                            <p>P : +8801750645894</p>
                            <p>E : mdsheikhfaridh@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
