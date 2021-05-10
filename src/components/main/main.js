import React from 'react';
import About from './about';
import Description from './description';
import Activities from './activities';
import Directions from './directions';

const Main = (props) => {
    const { parkData } = props;
    
    if(parkData && parkData.data) {
        const { images, name, addresses, states, description, activities, directionsInfo, directionsUrl, operatingHours, weatherInfo, topics, latitude, longitude } = parkData.data[0];
        return (
            <main className="main-content-area">
                <section className="main-content">
                    <h2 className="visually-hidden">Main content including about, description and activities sections</h2>
                    <About img={images} name={name} description={description} />
                    <Description states={states} opHours={operatingHours} weather={weatherInfo} />
                    <Activities activities={activities} topics={topics} />
                </section>
                <aside className="side-content">
                    <h2 className="visually-hidden">Additional information including park alerts and directions</h2>
                    <Directions addresses={addresses} dirInfo={directionsInfo} dirUrl={directionsUrl} latitude={latitude} longitude={longitude} />
                </aside>
            </main>
        )    
    }
    return (
        <div className="wait-on-select">
            <p>Please select your park to see information about the park.</p>
        </div>
    );
}

export default Main;