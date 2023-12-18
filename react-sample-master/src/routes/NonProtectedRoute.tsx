import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contextApi/authContext/AuthContext';
import { bool } from '../utils/boolean';

const NonProtectedRoute = (): React.ReactElement => {
    const { user } = useAuth();

    if (bool(user?.data) && !user.isOnBoard) {
        return <Navigate to="/" />;
    } else if (bool(user?.data) && user.isOnBoard) {
        return <Navigate to="/organization" />;
    }

    return <Outlet />;
};

export default NonProtectedRoute;
