import React from 'react';
import './DashBoard.scss';

const Dashboard = (): React.ReactElement => {
    return (
        <div className="dashBoardBody">
            <div className="upperBodyContent">
                <div>
                    <p>Total Employees</p>
                </div>
                <div>
                    <p>Total Projects</p>
                </div>
                <div>
                    <p>Total Departments</p>
                </div>
            </div>
            <div className="lowerBodyContent">
                <div>
                    <p>{"Today's Attendances"}</p>
                </div>
                <div>
                    <p>Ongoing Projects</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
