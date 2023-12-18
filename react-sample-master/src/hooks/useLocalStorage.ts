import { useState } from 'react';
import { errorConsole } from '../utils/customConsole';

const useLocalStorage = (keyName: string, defaultValue: any): [any, (newValue: any) => void] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(keyName);
            if (value != null) {
                return JSON.parse(value);
            }

            localStorage.setItem(keyName, JSON.stringify(defaultValue));
            return defaultValue;
        } catch (error: any) {
            errorConsole(error?.message);
            return defaultValue;
        }
    });

    const setValue = (newValue: any): void => {
        try {
            localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (error: any) {
            errorConsole(error?.message);
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};

export default useLocalStorage;
