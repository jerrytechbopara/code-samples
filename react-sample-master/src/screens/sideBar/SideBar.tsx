import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SideBar.scss';
import Header from './header/Header';
import { sideBarContent } from './utils';

const SideBar = (): React.ReactElement => {
    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        const handleBackButton = (): void => {
            window.history.pushState(null, '', window.location.href);
        };
        window.addEventListener('popstate', handleBackButton);
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, []);

    return (
        <div className="homeBody">
            <div className="sideBar">
                <div>Logo</div>
                <div>
                    {sideBarContent.map((item, index) => {
                        return (
                            <Link key={index} to={item.slug} className="sideBarMenu">
                                {item.name}
                            </Link>
                        );
                    })}
                    <div />
                    <Link to="/settings" className="sideBarMenu">
                        Setting
                    </Link>
                    <Link to="/profile" className="sideBarMenu">
                        Profile
                    </Link>
                    <Link to="/logout" className="logoutButton">
                        Log out
                    </Link>
                </div>
            </div>
            <div className="rightContentBody">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default SideBar;
