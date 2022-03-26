import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './dealerpage.css';
import TextField from '@mui/material/TextField';
import arrowIcon from '../Assets/arrow.svg';
import { useNavigate } from 'react-router-dom';

const DealerListPage = () => {
    const navigate = useNavigate();

    const [dlList, setDlList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [filterInput, setFilterInput] = useState('');
    const [showAll, setShowAll] = useState(false);

    let localDealers = localStorage.getItem('dealers');

    const dealerList = useSelector((state) => state.dealerList);

    useEffect(() => {
        localDealers = JSON.parse(localDealers);
        console.log(`local storage`);
        console.log(localDealers);
        if (dealerList.length > 0) {
            setDlList(dealerList);
            setFilteredList(dealerList.slice(0, 3));
        }
    }, [dealerList]);

    useEffect(() => {
        if (dlList.length > 0) {
            const fltr = dlList.filter((dealer) =>
                dealer.company.includes(filterInput)
            );
            setShowAll(false);
            setFilteredList(fltr.slice(0, 3));
        }
    }, [filterInput]);

    const loadMore = () => {
        setShowAll(true);
        if (dlList.length > 0) {
            const fltr = dlList.filter((dealer) =>
                dealer.company.includes(filterInput)
            );
            setFilteredList(fltr);
        }
    };

    return (
        <div className='dealer-container'>
            <div className='dealer-box'>
                <div
                    className='dealer-box-navigation'
                    onClick={() => navigate('/')}
                >
                    <img src={arrowIcon} />
                    <p>Go to main page</p>
                </div>

                <header>Interested Dealerships</header>

                {dealerList.length !== 0 ? (
                    <div className='dealer-search-container'>
                        <div className='dealer-search-box'>
                            <div className='form-input-label'>
                                <div></div>
                                <p>Search Company</p>
                            </div>
                            <TextField
                                className='inputRounded'
                                id='outlined-ext'
                                fullWidth
                                variant='outlined'
                                placeholder='Start typing company name for search'
                                onChange={(e) => setFilterInput(e.target.value)}
                                value={filterInput}
                            />
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {filteredList.map((dealer) => {
                    return (
                        <div
                            className='dealer-list-item-container'
                            key={dealer.name}
                        >
                            <div className='dealer-list-item-box'>
                                <header>{dealer.name}</header>
                                <div className='company-info'>
                                    <div>
                                        <p>
                                            <span>Company</span>
                                        </p>
                                        <p>{dealer.company}</p>
                                    </div>
                                    <div>
                                        <p>
                                            <span>Mobile phone number</span>
                                        </p>
                                        <p>+{dealer.mobile_phone}</p>
                                    </div>
                                    <div>
                                        <p>
                                            <span>Email address</span>
                                        </p>
                                        <p>{dealer.email_address}</p>
                                    </div>
                                    <div>
                                        <p>
                                            <span>Postcode</span>
                                        </p>
                                        <p>{dealer.postcode}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {dlList.length > 3 && !showAll ? (
                    <div>
                        <a onClick={loadMore}>Load More...</a>
                    </div>
                ) : dealerList.length === 0 ? (
                    <p style={{ color: 'white' }}>No dealers yet</p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default DealerListPage;
