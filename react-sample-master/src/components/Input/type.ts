export type InputType = 'outline' | 'normal';

export interface inputProps extends React.HTMLProps<HTMLInputElement> {
    type: InputType;
    placeholder: string;
    isError?: boolean;
    errorText?: string;
}
