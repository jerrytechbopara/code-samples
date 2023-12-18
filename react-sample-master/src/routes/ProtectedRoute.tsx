import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contextApi/authContext/AuthContext';
import { bool } from '../utils/boolean';
import './Route.scss';

const ProtectedRoute = (): React.ReactElement => {
    const { user } = useAuth();

    if (!bool(user)) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="protectedRouteBody">
            <Outlet />
        </div>
    );
};

export default ProtectedRoute;
