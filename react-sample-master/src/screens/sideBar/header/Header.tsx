import React from 'react';
import './Header.scss';

const Header = (): React.ReactElement => {
    return (
        <div className="header">
            <div>{/* Menu */}</div>
            <div>{/* Input */}</div>
            <div>
                <div>{/* Notification */}</div>
                <div>{/* Profile */}</div>
            </div>
        </div>
    );
};

export default Header;
