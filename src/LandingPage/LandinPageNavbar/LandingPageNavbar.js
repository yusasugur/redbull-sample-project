import React, { useState } from 'react';
import logo from '../../Assets/redbull-logo.svg';
import loginIcon from '../../Assets/loginIcon.png';
import registerIcon from '../../Assets/registerIcon.png';
import hamburgerIcon from '../../Assets/hamburger.svg';
import './landingpagenavbar.css';
import { useNavigate } from 'react-router-dom';

const LandingPageNavbar = () => {
    const [menu, setMenu] = useState(0);
    const navigate = useNavigate();

    return (
        <div>
            <div className='landing-navbar desktop'>
                <div className='landing-navbar-left-right'>
                    <a href='#'>Apply</a>
                    <a href='#'>How it works</a>
                    <a href='#'>About us</a>
                    <a href='#'>Blog</a>
                </div>
                <div className='landing-navbar-middle'>
                    <img src={logo} alt='Redbull' />
                </div>
                <div className='landing-navbar-left-right'>
                    <div
                        className='landing-navbar-right-1'
                        onClick={() => {
                            navigate('/register');
                        }}
                    >
                        <div>Partner sign up</div>

                        <img src={registerIcon} />
                    </div>
                    <div className='landing-navbar-right-2'>
                        <div>Partner login</div>

                        <img src={loginIcon} />
                    </div>
                </div>
            </div>

            <div
                className={
                    !menu
                        ? 'landing-navbar mobile'
                        : 'landing-navbar mobile-active'
                }
            >
                <div className='navbar-mobile-box'>
                    <div className='navbar-mobile-header'>
                        <div className='nt1'>
                            <img src={logo} alt='Redbull' />
                        </div>
                        <div className='nt2'>
                            <img
                                onClick={() => setMenu(!menu)}
                                className='mobile-hmbrg-button'
                                src={hamburgerIcon}
                            />
                        </div>
                    </div>

                    <div className='navbar-mobile-menu'>
                        <div>
                            <a
                                onClick={() => {
                                    navigate('/register');
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                Apply
                            </a>
                            <a href='#'>How it works</a>
                            <a href='#'>About us</a>
                            <a href='#'>Blog</a>
                        </div>
                        <div>
                            <a>Partner Sign In</a>
                            <a
                                onClick={() => {
                                    navigate('/register');
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                Partner Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageNavbar;
