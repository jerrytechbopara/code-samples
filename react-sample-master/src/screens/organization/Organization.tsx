import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Button from '../../components/button/Button';
import SizeBox from '../../components/sizeBox/SizeBox';
import { useAuth } from '../../contextApi/authContext/AuthContext';
import { bool } from '../../utils/boolean';
import { errorConsole } from '../../utils/customConsole';
import { toastWarnMessage } from '../../utils/tostify';
import './Organization.scss';

const orgDummyData = [
    { name: 'Marketing', isChecked: false },
    { name: 'Financial', isChecked: false },
    { name: 'IT', isChecked: false },
    { name: 'Manufacturing', isChecked: false },
    { name: 'Retail', isChecked: false },
    { name: 'Consulting', isChecked: false },
    { name: 'Real Estate', isChecked: false },
    { name: 'Construction', isChecked: false },
    { name: 'Hospitality', isChecked: false },
    { name: 'Energy', isChecked: false },
    { name: 'Transportation', isChecked: false },
    { name: 'Media and Entertainment', isChecked: false },
    { name: 'Education Company', isChecked: false },
    { name: 'Pharmaceutical', isChecked: false },
    { name: 'Other', isChecked: false },
];

const Organization = (): React.ReactElement => {
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const [orgData, setOrgData] = useState(orgDummyData);

    const toggleOrganization = (index: number): void => {
        try {
            const data = orgData.map((item, itemIndex) => {
                return {
                    ...item,
                    isChecked: itemIndex === index,
                };
            });
            setOrgData(data);
        } catch (error) {
            errorConsole(error);
        }
    };

    const onHandleOrganization = (): void => {
        try {
            const checkedOrg = orgData.find((item) => item.isChecked);
            if (bool(checkedOrg)) {
                const data = { ...user.data, checkedOrg };
                login({ data, isOnBoard: false });
                navigate('/', { replace: true });
                return;
            }
            toastWarnMessage('Select at least a Organization.');
        } catch (error) {}
    };

    return (
        <div className="orgBody">
            <h1>Choose your organization type</h1>
            <div className="dataBody">
                {orgData.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={item.isChecked ? 'orgSelectedText' : 'orgText'}
                            onClick={() => {
                                toggleOrganization(index);
                            }}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
            <SizeBox height={50} />
            <Button type="normal" text="Proceed" onClick={onHandleOrganization} />
            <ToastContainer />
        </div>
    );
};

export default Organization;
