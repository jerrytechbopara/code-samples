export interface InitialStateProps {
    userId: { value: string; error: string };
    password: { value: string; error: string };
}

export type Action =
    | { type: 'userId'; payload: { value: string; error: string } }
    | { type: 'password'; payload: { value: string; error: string } };
