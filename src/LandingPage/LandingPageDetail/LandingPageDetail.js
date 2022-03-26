import React from 'react';
import './landingdetail.css';
import phoneImage from '../../Assets/redbull-can.png';
import number1 from '../../Assets/elipse1.svg';
import number2 from '../../Assets/elipse2.svg';
import number3 from '../../Assets/elipse3.svg';
import { useNavigate } from 'react-router-dom';

const LandingPageDetail = () => {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='right'>
                <img src={phoneImage} />
            </div>
            <div className='upperleft'>
                <div>
                    <p>PayLater</p>
                </div>
                <div>
                    {' '}
                    <p>
                        Allow your customers to split their repair or service
                        bill over monthly repayments.
                    </p>{' '}
                </div>
                <div>
                    {' '}
                    <p>NO RISK FOR DEALERS, </p> <p>NO WORRY FOR DRIVERS</p>
                </div>
            </div>
            <div className='lowerleft'>
                <div>
                    <p>
                        <span>It's as simple as:</span>
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='bullet'>
                                <img src={number1} />
                            </div>
                            <p>
                                <span>FIX IT</span>
                            </p>
                            <p>
                                Your customers bring their vehicle to you. You
                                repair and service the car. Everything just like
                                it works right now.
                            </p>
                        </li>
                        <li>
                            <div className='bullet'>
                                <img src={number2} />
                            </div>
                            <p>
                                <span>SPLIT IT</span>
                            </p>
                            <p>
                                When the customer gets their bill or quote,
                                Redbull either integrates into your existing
                                online checkout or can be done on-site before
                                you hand back the keys. All in just a few
                                clicks.
                            </p>
                        </li>
                        <li>
                            {' '}
                            <div className='bullet'>
                                <img src={number3} />
                            </div>
                            <p>
                                <span>SORTED</span>
                            </p>
                            <p>
                                You and your customer part ways happy. You’re
                                paid in full direct from Redbull, the customer
                                repays Redbull over their chosen payment plan.
                            </p>
                        </li>
                    </ul>
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

export default LandingPageDetail;
