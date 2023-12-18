export interface ValueProps {
    value: string;
    error: string;
}

export interface StringPayloadProps {
    value: string;
    error: string;
}

export interface NumberPayloadProps {
    value: number;
    error: string;
}

export interface InitialStateProps {
    fullName: ValueProps;
    number: ValueProps;
    email: ValueProps;
    password: ValueProps;
    confirmPassword: ValueProps;
}

export type Action =
    | { type: 'fullName'; payload: ValueProps }
    | { type: 'number'; payload: ValueProps }
    | { type: 'email'; payload: ValueProps }
    | { type: 'password'; payload: ValueProps }
    | { type: 'confirmPassword'; payload: ValueProps };
