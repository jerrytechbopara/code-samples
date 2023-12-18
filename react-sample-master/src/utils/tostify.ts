import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccessMessage = (value: string | number): void => {
    toast.warn(value, {
        position: toast.POSITION.BOTTOM_CENTER,
    });
};

export const toastWarnMessage = (value: string | number): void => {
    toast.warn(value, {
        position: toast.POSITION.BOTTOM_CENTER,
    });
};
