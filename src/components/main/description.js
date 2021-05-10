import React from 'react';
import { stateFullNameFromAbbr, dayValuesToObject } from '../../utils/converters';

const Description = (props) => {
    let { states, opHours, weather } = props;
    let stateArray = states.split(',');
    let days = opHours[0].standardHours;
    return (
        <div className="description">
            <p className="main-description">{opHours[0].description}</p>
            <div className="description-tile">
                <h3><span className="fa fa-map"></span> State Locations</h3>
                {stateArray.map((item, ind) => {
                    const newIcon = `${item}.svg`;
                    return (
                        <figure key={ind}>
                            <img className="icon-image" src={process.env.PUBLIC_URL + '/svg/' + newIcon} alt={`icon of ${item}`} />
                            <figcaption>{stateFullNameFromAbbr(item)}</figcaption>
                        </figure>
                    );
                })}    
            </div>
            <div className="description-tile">
                <h3><span className="fa fa-clock-o"></span> Park hours</h3> 
                <ul>
                {dayValuesToObject(days).map((day, ind) => {
                    return (
                        <li key={ind}>
                            <span>{day.label}</span>
                            <span> : </span>
                            <span>{day.value}</span>
                        </li> 
                    );
                })}
                </ul>   
            </div>
            <div className="description-tile">
                <h3><span className="fa fa-cloud"></span> Weather</h3>
                <p className="small-text">{weather}</p>  
            </div>
            
        </div>
    )
}

export default Description;