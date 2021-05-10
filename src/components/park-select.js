import React from 'react';
import Select from 'react-select';

const ParkSelect = (props) => {
    const { visit, setSelectedPark } = props;
    return (
        <div className="park-select">
            <label>
                <span className="park-select-text">Select your park:</span>
                <Select
                    defaultValue={visit[0].value}
                    onChange={(e) => setSelectedPark(e)}
                    options={visit}
                    placeholder="Please choose a park"
                    classNamePrefix="park-select"
                />
            </label>  
        </div>
    )
}
export default ParkSelect;