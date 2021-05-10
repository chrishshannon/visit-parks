import React from 'react';
import ParkSelect from '../components/park-select';

const Header = (props) => {
    const { visit, setSelectedPark } = props;
    return (
        <header className="main-header">
            <div className="main-heading">
                <i className="fa fa-tree main-header-icon" aria-hidden="true"></i>
                <h1>Visit National Parks</h1>
            </div>
            <div className="park-selection">
                <ParkSelect visit={visit} setSelectedPark={setSelectedPark} />    
            </div>
        </header>
    )
}

export default Header;