import React from 'react';
import './landingfooter.css';
import signature from '../../Assets/verstappen-signature.png.png';

const LandinPageFooter = () => {
    return (
        <div className='footer-box'>
            <div className='footer-image'>
                <div className='footer-message'>
                    <div className='message-box'>
                        <p>
                            <span>
                                “Est sem nisl morbi praesent tempor augue in
                                venenatis dolor massa viverra parturient at
                                ligula.
                            </span>
                            <p>
                                Ad magnis in justo lobortis vestibulum a
                                adipiscing nisl magnis sociosqu faucibus
                                parturient aenean a metus sem quam adipiscing ut
                                eget ullamcorper pulvinar pharetra cursus
                                consectetur ante. Senectus primis scelerisque a
                                vestibulum vestibulum consectetur inceptos
                                pharetra. Suspendisse ultrices porta.”
                            </p>
                        </p>

                        <div>
                            <p className='director-name'>
                                <p>
                                    <span> Max Verstappen</span>
                                </p>
                                <p>Red Bull Racing F1 Driver</p>
                            </p>
                            <p className='signature'>
                                <img
                                    style={{ width: '76px', height: '26px' }}
                                    src={signature}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandinPageFooter;
