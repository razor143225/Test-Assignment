/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './DropdownSelection.scss';

function DropdownSelection() {
    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown-container'>
                <div className='dropdown-element'>
                    <h5>Map</h5>
                    <h5>></h5>
                </div>
                <div className='dropdown-element'>
                    <h5>Photo gallery</h5>
                    <h5>></h5>
                </div>
                <div className='dropdown-element'>
                    <h5>Amenities</h5>
                    <h5>></h5>
                </div>
                <div className='dropdown-element'>
                    <h5>Contact</h5>
                    <h5>></h5>
                </div>
            </div>
        </div>
    );
}

export default DropdownSelection;