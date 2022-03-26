import React from 'react';
import './landingpageinfo.css';
import starGroup from '../../Assets/F1.svg';
import { useNavigate } from 'react-router-dom';

const LandingPageInfo = () => {
    const navigate = useNavigate();

    return (
        <div className='landing-info'>
            <div className='landing-info-subheader'>
                <div>
                    <p>Excellent</p>
                    <p>
                        <img src={starGroup} />
                    </p>
                </div>
            </div>
            <div className='landing-info-header'>
                <p>BECOME A REDBULL APPROVED DEPENDABLE DEALERSHIP</p>
            </div>
            <div className='landing-info-details'>
                <div>
                    <span>
                        Join our network of 3,000+ garages and dealerships who
                        already offer Redbull to their customers.
                    </span>
                </div>
                <div>
                    <button
                        onClick={() => {
                            navigate('/register');
                        }}
                    >
                        Register your interest
                    </button>
                </div>
                <div>
                    <span>
                        Already registered? <a href='#'>Login</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LandingPageInfo;
