import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import SizeBox from '../../components/sizeBox/SizeBox';
import { useAuth } from '../../contextApi/authContext/AuthContext';
import { errorConsole } from '../../utils/customConsole';
import './Login.scss';
import { initialState, reducer } from './utils';

const Login = (): React.ReactElement => {
    const { login } = useAuth();

    const [inputValue, dispatch] = useReducer(reducer, initialState);

    const { userId, password } = inputValue;

    const handleLogin = (): void => {
        try {
            const isValidUserId = userId.value.length > 3;
            const isValidPassword = password.value.length >= 6;
            if (!isValidUserId) {
                dispatch({
                    type: 'userId',
                    payload: { value: userId.value, error: 'Enter a valid value.' },
                });
            }

            if (!isValidPassword) {
                dispatch({
                    type: 'password',
                    payload: { value: userId.value, error: 'Password should be 6 digits.' },
                });
            }

            if (isValidUserId && isValidPassword) {
                login({
                    data: { userId, password },
                    isOnBoard: false,
                });
            }
        } catch (error) {
            errorConsole(error);
        }
    };

    const onUserIdChange = (e: any): void => {
        dispatch({ type: 'userId', payload: { value: e.target.value, error: '' } });
    };

    const onPasswordChange = (e: any): void => {
        dispatch({ type: 'password', payload: { value: e.target.value, error: '' } });
    };

    return (
        <div className="loginBody">
            <div className="leftBody"></div>
            <div className="rightBody">
                <div className="upperBody">
                    <div>Logo</div>
                </div>

                <div className="lowerBody">
                    <Input
                        type="normal"
                        placeholder="Mobile Number or Email Id"
                        onChange={onUserIdChange}
                        errorText={userId.error}
                    />
                    <SizeBox height={7} />
                    <Input
                        type="normal"
                        placeholder="Password"
                        onChange={onPasswordChange}
                        errorText={password.error}
                    />
                    <SizeBox height={7} />
                    <Button type="linear" text="Login" onClick={handleLogin} />
                    <div className="haveAnAccount">
                        <p>
                            Do not have an account?{' '}
                            <Link to="/create account">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
