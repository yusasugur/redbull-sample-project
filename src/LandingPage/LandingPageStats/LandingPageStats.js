import React from 'react';
import './landingstats.css';

const LandingPageStats = () => {
    return (
        <div className='landing-stats-box'>
            <div className='stats-header'>
                <p>Benefits our other parners have noticed offering PayLater</p>
            </div>
            <div className='stats'>
                <div>
                    <div>
                        <p>
                            {' '}
                            71<span>%</span>
                        </p>
                    </div>
                    <div className='stats-detail'>
                        <p>
                            of customers authorised more work because they split
                            their bill with Redbull
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            {' '}
                            90<span>%</span>
                        </p>
                    </div>
                    <div className='stats-detail'>
                        <p>
                            of customers would return to the same garage because
                            they offered Redbull
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            {' '}
                            +350<span>%</span>
                        </p>
                    </div>
                    <div>
                        <div className='stats-detail'>
                            <p>
                                increase in average invoice of customers using
                                Redbull to split their bill.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            {' '}
                            89<span>%</span>{' '}
                        </p>
                    </div>
                    <div className='stats-detail'>
                        <p>
                            of customers felt less stressed because they used
                            Redbull to spread the cost.
                        </p>
                    </div>
                </div>
            </div>
            <div className='stats-sub-header'>
                <p>
                    {' '}
                    <span>Source:</span> Survey of 2,750 Redbull customers in
                    Feb 2021
                </p>
            </div>
        </div>
    );
};

export default LandingPageStats;
