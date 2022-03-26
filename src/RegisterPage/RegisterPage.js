import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDealer } from '../actions';
import { useNavigate } from 'react-router-dom';
import './registerpage.css';
import arrowIcon from '../Assets/arrow.svg';
import errorIcon from '../Assets/errorIcon.svg';
import successIcon from '../Assets/successIcon.svg';
import plusIcon from '../Assets/plusIcon.svg';
import okayIcon from '../Assets/okayIcon.svg';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import arrowIconRight from '../Assets/arrowIconRight.svg';

const postcodeList = [
    'N61BA',
    'AB219LA',
    'BB14ED',
    'ST36AN',
    'ME160DU',
    'LN96BQ',
    'HG41QU',
    'GU213QH',
    'SN21RB',
];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);
    const [notifySuccessOpen, setNotifySuccessOpen] = useState(false);
    const [notifyErrorOpen, setNotifyErrorOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const [name, setName] = useState('');
    const [nameWarning, setNameWarning] = useState(false);
    const [nameCorrect, setNameCorrect] = useState(false);

    const [companyName, setCompanyName] = useState('');
    const [companyNameWarning, setCompanyNameWarning] = useState(false);
    const [companyNameCorrect, setCompanyNameCorrect] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberWarning, setPhoneNumberWarning] = useState(false);
    const [phoneNumberCorrect, setPhoneNumberCorrect] = useState(false);

    const [emailAddress, setEmailAddress] = useState('');
    const [emailAddressWarning, setEmailAddressWarning] = useState(false);
    const [emailAddressCorrect, setEmailAddressCorrect] = useState(false);

    const [postCode, setPostCode] = useState('');
    const [postCodeWarning, setPostCodeWarning] = useState(false);
    const [postCodeCorrect, setPostCodeCorrect] = useState(false);
    const [postCodeInput, setPostCodeInput] = useState('');
    const [filteredPostCodes, setFilteredPostCodes] = useState([]);

    const [paymentChoice, setPaymentChoice] = useState('');

    const [errorMessage, setErrorMessage] = useState('Dealer could not added.');

    useEffect(() => {
        const fltr = postcodeList.filter((pcode) =>
            pcode.includes(postCodeInput.replace(/\s/g, '').toUpperCase())
        );
        setFilteredPostCodes(fltr);
    }, [postCodeInput]);

    const dropdownHandler = () => {};

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotifyErrorOpen(false);
        setNotifySuccessOpen(false);
    };

    const submitHandler = async () => {
        if (
            name !== '' &&
            nameWarning === false &&
            companyName !== '' &&
            companyNameWarning === false &&
            phoneNumber !== '' &&
            phoneNumberWarning === false &&
            emailAddress !== '' &&
            emailAddressWarning === false &&
            postCode !== '' &&
            postCodeWarning === false &&
            paymentChoice !== ''
        ) {
            setSubmit(true);

            let postBody = {};
            if (paymentChoice === 'pay_later') {
                postBody = {
                    name: name,
                    company: companyName,
                    mobile_phone: phoneNumber,
                    email_address: emailAddress,
                    postcode: postCode,
                    pay_later: 'true',
                    pay_now: 'false',
                };
            } else {
                postBody = {
                    name: name,
                    company: companyName,
                    mobile_phone: phoneNumber,
                    email_address: emailAddress,
                    postcode: postCode,
                    pay_later: 'false',
                    pay_now: 'true',
                };
            }

            setSubmit(false);

            let dealers = localStorage.getItem('dealers');

            if (dealers) {
                dealers = JSON.parse(dealers);
                dealers = [postBody, ...dealers];
            } else {
                dealers = [postBody];
            }
            localStorage.setItem('dealers', JSON.stringify(dealers));

            dispatch(addDealer(postBody));
            setNotifySuccessOpen(true);
        } else {
            setErrorMessage('Invalid Input');
            setNotifyErrorOpen(true);
        }
    };

    const onBlurCheck = (inputType, input) => {
        switch (inputType) {
            case 'name':
                if (
                    /^([a-zA-Z0-9]+)$/.test(name) &&
                    /\d/.test(name) &&
                    /[A-Z]/i.test(name) &&
                    name.length < 255
                ) {
                    setNameWarning(false);
                    setNameCorrect(true);
                } else {
                    setNameWarning('Incorrect entry');
                    setNameCorrect(false);
                }
                break;
            case 'companyName':
                if (
                    (typeof companyName === 'string' ||
                        companyName instanceof String) &&
                    companyName.length < 255 &&
                    companyName !== ''
                ) {
                    setCompanyNameWarning(false);
                    setCompanyNameCorrect(true);
                } else {
                    setCompanyNameWarning('​Incorrect entry.');
                    setCompanyNameCorrect(false);
                }
                break;
            case 'phoneNumber':
                if (/^0(\s*)(7)(\s*)(\d(\s*)){9}$/.test(phoneNumber)) {
                    setPhoneNumberWarning(false);
                    setPhoneNumberCorrect(true);
                } else {
                    setPhoneNumberWarning(
                        'Incorrect entry (Sample Number: 07891234567)'
                    );
                    setPhoneNumberCorrect(false);
                }
                break;
            case 'emailAddress':
                if (/\S+@\S+\.\S+/.test(String(emailAddress).toLowerCase())) {
                    setEmailAddressWarning(false);
                    setEmailAddressCorrect(true);
                } else {
                    setEmailAddressWarning('Incorrect entry');
                    setEmailAddressCorrect(false);
                }
                break;
            case 'postCode':
                setChecked(false);

                if (input !== '') {
                    setPostCodeWarning(false);
                    setPostCodeCorrect(true);
                    setPostCodeInput(input);
                } else {
                    setPostCodeWarning('Incorrect entry');
                    setPostCodeCorrect(false);
                }
                break;
            default:
                break;
        }
    };

    const onFocusCloseWarning = (inputType) => {
        switch (inputType) {
            case 'name':
                setNameWarning(false);
                setNameCorrect(false);

                break;
            case 'companyName':
                setCompanyNameWarning(false);
                setCompanyNameCorrect(false);
                break;
            case 'phoneNumber':
                setPhoneNumberWarning(false);
                setPhoneNumberCorrect(false);
                break;
            case 'emailAddress':
                setEmailAddressWarning(false);
                setEmailAddressCorrect(false);
                break;
            case 'postCode':
                setPostCodeWarning(false);
                setPostCodeCorrect(false);
                setChecked(true);
            default:
                break;
        }
    };

    return (
        <div className='register-container' onClick={dropdownHandler}>
            <div className='register-box'>
                <div className='register-form-container'>
                    <div className='register-form-header'>
                        <div className='register-form-header-navigation'>
                            <div
                                className='register-form-navigator'
                                onClick={() => {
                                    navigate('/');
                                }}
                            >
                                {' '}
                                <img src={arrowIcon} />
                                <p>Go to main page</p>
                            </div>
                            <div
                                className='register-form-navigator list'
                                onClick={() => {
                                    navigate('/list');
                                }}
                            >
                                {' '}
                                <p>Go to dealer list</p>
                                <img src={arrowIconRight} />
                            </div>
                        </div>
                        <div>
                            <header>Join our network</header>
                        </div>
                        <div>
                            <p>
                                Offer <span>PayLater</span> to split servicing
                                and repair work into monthly instalments -
                                interest-free.{' '}
                            </p>
                            <p>
                                Use <span>PayNow</span> to take secure payments
                                online.
                            </p>
                        </div>
                    </div>
                    <div className='register-form'>
                        <div className='register-form-box'>
                            <div className='form-box-header'>
                                <p>
                                    <span>Join our network</span>
                                </p>
                                <p>Free to join, no monthly fees</p>
                            </div>
                            <div className='form-box-body'>
                                <div className='form-input-label'>
                                    <div></div>
                                    <p>Name</p>
                                </div>
                                <TextField
                                    color='success'
                                    focused={nameCorrect}
                                    value={name}
                                    onBlur={() => onBlurCheck('name')}
                                    onFocus={() => onFocusCloseWarning('name')}
                                    onChange={(e) => setName(e.target.value)}
                                    className='inputRounded'
                                    id='outlined-error-helper-text'
                                    helperText={nameWarning}
                                    fullWidth
                                    variant='outlined'
                                    error={!(nameWarning === false)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                {!(nameWarning === false) &&
                                                !nameCorrect ? (
                                                    <img src={errorIcon} />
                                                ) : nameCorrect &&
                                                  nameWarning === false ? (
                                                    <img src={successIcon} />
                                                ) : (
                                                    <></>
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className='form-input-label'>
                                    <div></div>
                                    <p>Company</p>
                                </div>
                                <TextField
                                    color='success'
                                    focused={companyNameCorrect}
                                    value={companyName}
                                    onBlur={() => onBlurCheck('companyName')}
                                    onFocus={() =>
                                        onFocusCloseWarning('companyName')
                                    }
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                    className='inputRounded'
                                    id='outlined-error-helper-text'
                                    helperText={companyNameWarning}
                                    fullWidth
                                    variant='outlined'
                                    error={!(companyNameWarning === false)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                {!(
                                                    companyNameWarning === false
                                                ) && !companyNameCorrect ? (
                                                    <img src={errorIcon} />
                                                ) : companyNameCorrect &&
                                                  companyNameWarning ===
                                                      false ? (
                                                    <img src={successIcon} />
                                                ) : (
                                                    <></>
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className='form-input-label'>
                                    <div></div>
                                    <p>Mobile phone Number</p>
                                </div>
                                <TextField
                                    color='success'
                                    focused={phoneNumberCorrect}
                                    value={phoneNumber}
                                    onBlur={() => onBlurCheck('phoneNumber')}
                                    onFocus={() =>
                                        onFocusCloseWarning('phoneNumber')
                                    }
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    className='inputRounded'
                                    id='outlined-error-helper-text'
                                    helperText={phoneNumberWarning}
                                    fullWidth
                                    variant='outlined'
                                    error={!(phoneNumberWarning === false)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                {!(
                                                    phoneNumberWarning === false
                                                ) && !phoneNumberCorrect ? (
                                                    <img src={errorIcon} />
                                                ) : phoneNumberCorrect &&
                                                  phoneNumberWarning ===
                                                      false ? (
                                                    <img src={successIcon} />
                                                ) : (
                                                    <></>
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className='form-input-label'>
                                    <div></div>
                                    <p>Email address</p>
                                </div>
                                <TextField
                                    color='success'
                                    focused={emailAddressCorrect}
                                    value={emailAddress}
                                    onBlur={() => onBlurCheck('emailAddress')}
                                    onFocus={() =>
                                        onFocusCloseWarning('emailAddress')
                                    }
                                    onChange={(e) =>
                                        setEmailAddress(e.target.value)
                                    }
                                    className='inputRounded'
                                    id='outlined-error-helper-text'
                                    helperText={emailAddressWarning}
                                    fullWidth
                                    variant='outlined'
                                    error={!(emailAddressWarning === false)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                {!(
                                                    emailAddressWarning ===
                                                    false
                                                ) && !emailAddressCorrect ? (
                                                    <img src={errorIcon} />
                                                ) : emailAddressCorrect &&
                                                  emailAddressWarning ===
                                                      false ? (
                                                    <img src={successIcon} />
                                                ) : (
                                                    <></>
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className='form-input-label'>
                                    <div></div>
                                    <p>Postcode</p>
                                </div>

                                <TextField
                                    color='success'
                                    focused={postCodeCorrect}
                                    value={postCodeInput}
                                    onFocus={() =>
                                        onFocusCloseWarning('postCode')
                                    }
                                    // onBlur={() => onBlurCheck('postCode')}
                                    onChange={(e) => {
                                        setPostCodeInput(e.target.value);
                                    }}
                                    className='inputRounded'
                                    helperText={postCodeWarning}
                                    fullWidth
                                    variant='outlined'
                                    placeholder='Start typing to match your address'
                                    id='outlined-error-helper-text'
                                    error={!(postCodeWarning === false)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                {!(postCodeWarning === false) &&
                                                !postCodeCorrect ? (
                                                    <img src={errorIcon} />
                                                ) : postCodeCorrect &&
                                                  postCodeWarning === false ? (
                                                    <img src={successIcon} />
                                                ) : (
                                                    <></>
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div
                                    className={
                                        checked
                                            ? 'postcode-dropdown'
                                            : 'postcode-dropdown down'
                                    }
                                >
                                    <div>
                                        <ul>
                                            {filteredPostCodes.map((pCode) => {
                                                return (
                                                    <li
                                                        key={pCode}
                                                        onClick={() => {
                                                            setPostCodeInput(
                                                                pCode
                                                            );
                                                            setPostCode(pCode);
                                                            onBlurCheck(
                                                                'postCode',
                                                                pCode
                                                            );
                                                        }}
                                                    >
                                                        <p>
                                                            {pCode.slice(0, 3)}{' '}
                                                            <span>
                                                                {pCode.slice(
                                                                    3,
                                                                    6
                                                                )}
                                                            </span>
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                <div className='form-input-label'>
                                    <div></div>
                                    <p>What services are you interested in?</p>
                                </div>
                                <p className='form-service-subheader'>
                                    Please select the services you’re interested
                                    in offering your customers
                                </p>
                                <div className='form-service-box'>
                                    <div
                                        className={
                                            paymentChoice === 'pay_later'
                                                ? 'form-service-choice active'
                                                : 'form-service-choice'
                                        }
                                        onClick={() =>
                                            setPaymentChoice('pay_later')
                                        }
                                    >
                                        <p>PayLater</p>
                                        <div>
                                            {paymentChoice !== 'pay_later' ? (
                                                <img src={plusIcon} />
                                            ) : (
                                                <img src={okayIcon} />
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className='form-service-choice paynow'
                                        onClick={() =>
                                            setPaymentChoice('pay_now')
                                        }
                                        className={
                                            paymentChoice === 'pay_now'
                                                ? 'form-service-choice active'
                                                : 'form-service-choice'
                                        }
                                    >
                                        <p>PayNow</p>
                                        <div>
                                            {paymentChoice !== 'pay_now' ? (
                                                <img src={plusIcon} />
                                            ) : (
                                                <img src={okayIcon} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-box-footer'>
                                <div>
                                    <button
                                        disabled={submit}
                                        onClick={submitHandler}
                                    >
                                        {submit === true ? (
                                            <CircularProgress />
                                        ) : (
                                            ' Register your interest'
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <p>
                                        Already registered? <span>Login</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={notifySuccessOpen || notifyErrorOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                {!notifySuccessOpen ? (
                    <Alert
                        onClose={handleClose}
                        sx={{ width: '100%' }}
                        severity='error'
                    >
                        {errorMessage}
                    </Alert>
                ) : (
                    <Alert
                        onClose={handleClose}
                        severity='success'
                        sx={{ width: '100%' }}
                    >
                        Dealer successfully added to the list.
                    </Alert>
                )}
            </Snackbar>
        </div>
    );
};

export default RegisterPage;
