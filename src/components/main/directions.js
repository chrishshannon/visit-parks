import React from 'react';

const Directions = (props) => {
    const { addresses, dirInfo, dirUrl, longitude, latitude } = props;
    return (
        <div className="directions">
            <div className="directions-address">
                <h3><span className="fa fa-map-marker"></span> Location<span className="visually-hidden"> of the visitor's center</span></h3>
                <address className="address">
                    {addresses.map((item, ind) => {
                        if(item.type === "Physical") {
                            return (
                                <div key={ind}>
                                {item.line1 && <p>{item.line1}</p>}
                                {item.line2 && <p>{item.line2}</p>}
                                {item.line3 && <p>{item.line3}</p>}
                                <p>{item.city}, {item.stateCode} {item.postalCode}</p>
                                <br />
                                <p>Latitude: {latitude}</p>
                                <p>Longitude: {longitude}</p>
                                </div>
                            );
                        }
                        return false;
                        
                    })}
                </address>    
            </div>
            <article>
                <h3 className="visually-hidden">Route directions and link to NPS directions page</h3>
                <div className="directions-info">
                    {dirInfo}
                </div>
                <div className="directions-url">
                    <a href={dirUrl}><span className="fa fa-bus"></span> Map and transit information</a>
                </div>
            </article>
        </div>
    )
}

export default Directions;