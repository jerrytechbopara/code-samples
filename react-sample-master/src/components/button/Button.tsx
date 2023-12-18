import React from 'react';
import type { ButtonProps } from './type';
import LinearButton from './variants/LinearButton';
import NormalButton from './variants/NormalButton';

interface ButtonJsonProps {
    normal: React.ReactElement;
    linear: React.ReactElement;
}

const Button = (props: ButtonProps): React.ReactElement => {
    const buttonJson = (props: ButtonProps): ButtonJsonProps => {
        return {
            normal: <NormalButton {...props} />,
            linear: <LinearButton {...props} />,
        };
    };

    return <div>{buttonJson(props)[props.type]}</div>;
};

export default Button;
