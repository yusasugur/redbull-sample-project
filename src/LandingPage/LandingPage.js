import React from 'react';
import './landingpage.css';
import LandingPageNavbar from './LandinPageNavbar/LandingPageNavbar';
import LandingPageInfo from './LandingPageInfo/LandingPageInfo';
import LandingPageDetail from './LandingPageDetail/LandingPageDetail';
import LandingPageStats from './LandingPageStats/LandingPageStats';
import LandingPagePayInfo from './LandingPagePayInfo/LandingPagePayInfo';
import LandinPageFooter from './LandingPageFooter/LandinPageFooter';

const LandingPage = () => {
    return (
        <div>
            <div className='landing-container'>
                <div className='landing-box'>
                    <LandingPageInfo />
                </div>
            </div>
            <div className='landing-detail-container'>
                <LandingPageDetail />
            </div>
            <div className='landing-stats-container'>
                <LandingPageStats />
            </div>
            <div className='landing-payinfo-container'>
                <LandingPagePayInfo />
            </div>
            <div className='landing-footer-container'>
                <LandinPageFooter />
            </div>
        </div>
    );
};

export default LandingPage;
