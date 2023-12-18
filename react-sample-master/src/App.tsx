import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';
import './App.scss';
import AuthLayout from './layout/AuthLayout';
import NonProtectedRoute from './routes/NonProtectedRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './screens/dashBoard/DashBoard';
import Login from './screens/login/Login';
import Organization from './screens/organization/Organization';
import SideBar from './screens/sideBar/SideBar';
import SignUp from './screens/signUp/SignUp';

const Projects = (): React.ReactElement => {
    return <div>Projects</div>;
};
const Department = (): React.ReactElement => {
    return <div>Department</div>;
};
const Attendance = (): React.ReactElement => {
    return <div>Attendance</div>;
};
const Leave = (): React.ReactElement => {
    return <div>Leave</div>;
};
const Holiday = (): React.ReactElement => {
    return <div>Holiday</div>;
};
const Tasks = (): React.ReactElement => {
    return <div>Tasks</div>;
};
const Settings = (): React.ReactElement => {
    return <div>settings</div>;
};
const Profile = (): React.ReactElement => {
    return <div>profile</div>;
};
const Logout = (): React.ReactElement => {
    return <div>logout</div>;
};

const getUserData = (): any =>
    new Promise((resolve) => {
        const user = localStorage.getItem('user');
        resolve(user);
    });

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />} loader={() => defer({ userPromise: getUserData() })}>
            <Route element={<NonProtectedRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/create account" element={<SignUp />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<SideBar />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/department" element={<Department />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/leave" element={<Leave />} />
                    <Route path="/Holiday" element={<Holiday />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route path="/organization" element={<Organization />} />
            </Route>
        </Route>,
    ),
);

export default router;
