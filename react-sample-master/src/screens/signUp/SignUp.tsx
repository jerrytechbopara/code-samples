import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import SizeBox from '../../components/sizeBox/SizeBox';
// import { useAuth } from 'contextApi/authContext/AuthContext';
import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contextApi/authContext/AuthContext';
import { emailValidated, numberValidated, stringValidated } from '../../utils/validation';
import './SignUp.scss';
import { initialState, reducer } from './utils';

const SignUp = (): React.ReactElement => {
    const { login } = useAuth();
    const [dataValue, dispatch] = useReducer(reducer, initialState);
    const { fullName, number, email, password, confirmPassword } = dataValue;

    const handleSignUp = (): void => {
        try {
            const isFullNameValid = fullName.value.length > 3;
            const isNumberValid = number.value.length === 10;
            const isEmailValid = emailValidated(email.value);
            const isPasswordValid = password.value.length >= 6;
            const doPasswordsMatch = password.value === confirmPassword.value;

            if (!isFullNameValid) {
                dispatch({
                    type: 'fullName',
                    payload: {
                        value: fullName.value,
                        error: 'Full name is too short.',
                    },
                });
            }

            if (!isNumberValid) {
                dispatch({
                    type: 'number',
                    payload: {
                        value: number.value,
                        error: 'Number should be 10 digits.',
                    },
                });
            }

            if (!isEmailValid) {
                dispatch({
                    type: 'email',
                    payload: {
                        value: email.value,
                        error: 'Enter a valid email Id.',
                    },
                });
            }

            if (!isPasswordValid) {
                dispatch({
                    type: 'password',
                    payload: {
                        value: password.value,
                        error: 'Password should be 6 digits.',
                    },
                });
            }

            if (!doPasswordsMatch) {
                dispatch({
                    type: 'confirmPassword',
                    payload: {
                        value: confirmPassword.value,
                        error: 'Passwords do not match.',
                    },
                });
            }

            if (
                isFullNameValid &&
                isNumberValid &&
                isEmailValid &&
                isPasswordValid &&
                doPasswordsMatch
            ) {
                console.log('--dataValue--', dataValue);
                login({
                    data: {
                        fullName,
                        number,
                        email,
                        password,
                    },
                    isOnBoard: true,
                });
            }
        } catch (error) {}
    };

    const onChangeFullName = (e: any): void => {
        const inputValue = e.target.value;
        if (stringValidated(inputValue)) {
            dispatch({
                type: 'fullName',
                payload: { value: e.target.value, error: '' },
            });
            return;
        }
        e.target.value = inputValue.slice(0, -1);
    };

    const onChangeNumber = (e: any): void => {
        const inputValue = e.target.value;
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (numberValidated(inputValue)) {
            dispatch({
                type: 'number',
                payload: { value: e.target.value, error: '' },
            });
            return;
        }
        e.target.value = inputValue.slice(0, -1);
    };

    const onChangeEmail = (e: any): void => {
        dispatch({
            type: 'email',
            payload: { value: e.target.value, error: '' },
        });
    };

    const onChangePassword = (e: any): void => {
        dispatch({
            type: 'password',
            payload: { value: e.target.value, error: '' },
        });
    };

    const onConfirmPasswordChange = (e: any): void => {
        dispatch({
            type: 'confirmPassword',
            payload: { value: e.target.value, error: '' },
        });
    };

    return (
        <div className="SignUpBody">
            <div className="leftBody"></div>
            <div className="rightBody">
                <div className="upperBody">
                    <div>Logo</div>
                </div>
                <div className="lowerBody">
                    <Input
                        type="normal"
                        placeholder="Full Name"
                        onChange={onChangeFullName}
                        errorText={fullName.error}
                    />
                    <SizeBox height={7} />
                    <Input
                        type="normal"
                        placeholder="Mobile Number"
                        onChange={onChangeNumber}
                        errorText={number.error}
                    />
                    <SizeBox height={7} />
                    <Input
                        type="normal"
                        placeholder="Email Id"
                        onChange={onChangeEmail}
                        errorText={email.error}
                    />
                    <SizeBox height={7} />
                    <Input
                        type="normal"
                        placeholder="Password"
                        onChange={onChangePassword}
                        errorText={password.error}
                    />
                    <SizeBox height={7} />
                    <Input
                        type="normal"
                        placeholder="Confirm Password"
                        onChange={onConfirmPasswordChange}
                        errorText={confirmPassword.error}
                    />
                    <SizeBox height={7} />

                    <Button type="linear" text="Sign Up" onClick={handleSignUp} />

                    <div className="notHaveAccount">
                        <p>
                            Have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                    <div className="privacyServices">
                        <p>
                            By, continuing, you agree to our{' '}
                            <a href="https://microsoft.com">terms of services</a> and{' '}
                            <a href="https://google.com"> privacy policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
