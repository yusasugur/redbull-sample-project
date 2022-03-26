import React from 'react';
import './landingpayinfo.css';
import secureIcon from '../../Assets/secure.png';
import fastIcon from '../../Assets/fast.png';
import lowcostIcon from '../../Assets/money.png';
import { useNavigate } from 'react-router-dom';

const LandingPagePayInfo = () => {
    const navigate = useNavigate();

    return (
        <div className='payinfo-box'>
            <div className='payinfo-header'>
                <p>PayNow</p>
                <p>
                    Our contactless payment solution that allows you to take
                    payments online from your customers.
                </p>
                <p>Accept payments anywhere, anytime</p>
            </div>
            <div className='payinfo-stats'>
                <p>
                    {' '}
                    <span>Benefits of PayNow</span>
                </p>
                <div className='stats-container'>
                    <div className='stat-box'>
                        <div>
                            <img src={secureIcon} />
                        </div>
                        <div>
                            <p>
                                <span>Secure</span>
                            </p>
                            <p>
                                Prevent customers from revealing sensitive
                                information over the phone, GDPR safe and
                                tested.
                            </p>
                        </div>
                    </div>
                    <div className='stat-box'>
                        <div>
                            <img src={lowcostIcon} />
                        </div>

                        <div>
                            <p>
                                <span>Low Cost</span>
                            </p>
                            <p>
                                Low transaction fee, no setup or mobile phone
                                fees.
                            </p>
                        </div>
                    </div>
                    <div className='stat-box'>
                        <div>
                            <img src={fastIcon} />
                        </div>

                        <div>
                            <p>
                                <span>Fast</span>
                            </p>
                            <p>Set up and ready to go in minutes!</p>
                        </div>
                    </div>
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
            </div>
        </div>
    );
};

export default LandingPagePayInfo;
