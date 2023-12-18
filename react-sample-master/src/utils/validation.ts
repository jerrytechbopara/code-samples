export const stringValidated = (text: any): boolean => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(text);
};

export const numberValidated = (value: any): boolean => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
};

export const emailValidated = (value: any): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
};
