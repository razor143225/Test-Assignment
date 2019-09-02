import React from 'react';
import logo from '../../images/hiltonLogo.png';
import DropdownSelection from '../DropdownSelection/DropdownSelection';
import background from '../../images/background.png';
import hotelImage from '../../images/hotelexterior.jpg';
import footerLogo from '../../images/hiltonLogo.png';
import './PageOneBodyContent.scss';
function PageOneBodyContent() {
    return (
        <div>
            <header className='header'>
                <a className='btn-back' href='/'><span>Back</span></a>
                <h5 className='header_maintext'>Hotel Details</h5>
                <img className='header_logoimg' src={logo} alt='headerImage' />
            </header>
            <div style={{
                backgroundImage: `url(${background})`
            }} className='main-background'>

                <div className='img-container'>
                    <img src={hotelImage} alt='hotelImage' />
                    <div className='hotel-info'>
                        <h5 style={{ color: 'white' }}>Hilton Chicago</h5>
                        <h6 style={{ color: '#8aa5c1' }}>720 South Michigan Avenue</h6>
                        <h6 style={{ color: '#8aa5c1' }}>Chicago, Illinois, 60605</h6>
                        <h6 style={{ color: 'white', textDecoration: 'underline' }}>1-312-922-4400</h6>
                    </div>
                </div>
                <DropdownSelection />
            </div>
            <footer className='footer-space'>
                <img className='header_logoimg' src={footerLogo} alt='headerImage' />
            </footer>
        </div>
    );
}

export default PageOneBodyContent;