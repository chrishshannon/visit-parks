import { Carousel } from 'react-bootstrap';
import React from 'react';

const About = (props) => {
    const { description, img, name } = props;
    return (
        <article className="about">
            <h2 className="visually-hidden">Learn about {name} National Park</h2>
            <div className="about-pics">
                <Carousel fade>
                    {img.map((item, ind) => {
                        return (
                            <Carousel.Item key={ind}>
                                <img className="d-block w-100" src={item.url} alt={item.altText} />
                            </Carousel.Item>       
                        )
                    })}    
                </Carousel>    
            </div>
            <div className="about-place">
                <h3 aria-describedby={`about${name.split(" ")[0]}`}><span className="fa fa-tree"></span> {name} National Park</h3>
                <p id={`about${name.split(" ")[0]}`}>{description}</p>
            </div>
        </article>
    )
}

export default About;