import type { Action, InitialStateProps } from './type';

export const initialState: InitialStateProps = {
    userId: { value: '', error: '' },
    password: { value: '', error: '' },
};

export const reducer = (state: InitialStateProps, action: Action): InitialStateProps => {
    switch (action.type) {
        case 'userId':
            return {
                ...state,
                userId: { value: action.payload.value, error: action.payload.error },
            };
        case 'password':
            return {
                ...state,
                password: { value: action.payload.value, error: action.payload.error },
            };

        default:
            return state;
    }
};
