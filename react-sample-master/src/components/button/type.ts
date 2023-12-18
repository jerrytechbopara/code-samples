export type ButtonType = 'linear' | 'normal';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: ButtonType;
    text: string;
}
