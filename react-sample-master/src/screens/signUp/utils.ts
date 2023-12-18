import type { Action, InitialStateProps } from './type';

export const initialState: InitialStateProps = {
    fullName: { value: '', error: '' },
    number: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
};

export const reducer = (state: InitialStateProps, action: Action): InitialStateProps => {
    switch (action.type) {
        case 'fullName':
            return {
                ...state,
                fullName: { value: action.payload.value, error: action.payload.error },
            };

        case 'number':
            return {
                ...state,
                number: { value: action.payload.value, error: action.payload.error },
            };

        case 'email':
            return {
                ...state,
                email: { value: action.payload.value, error: action.payload.error },
            };
        case 'password':
            return {
                ...state,
                password: { value: action.payload.value, error: action.payload.error },
            };
        case 'confirmPassword':
            return {
                ...state,
                confirmPassword: { value: action.payload.value, error: action.payload.error },
            };

        default:
            return state;
    }
};
