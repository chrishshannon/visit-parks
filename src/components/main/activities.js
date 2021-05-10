import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Activities = (props) => {
    const { activities, topics } = props;
    return (
        <div className="activities">
            <div>
                <h3><span className="fa fa-bicycle"></span> Fun activities</h3>
                <div className="activities-list">
                    <ListGroup>
                        {activities.map((activity, ind) => {
                            return(
                                <ListGroup.Item action key={ind}>
                                    {activity.name}
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </div>
            </div>
            <div>
                <h3><span className="fa fa-comments"></span> Fun topics</h3>
                <div className="activities-list">
                    <ListGroup>
                        {topics.map((topic, ind) => {
                            return(
                                <ListGroup.Item action key={ind}>
                                    {topic.name}
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}

            
            
export default Activities;