import React from 'react';
import type { inputProps } from './type';
import OutlineInput from './variants/OutlineInput';
import NormalInput from './variants/NormalInput';

interface InputJsonProps {
    outline: React.ReactElement;
    normal: React.ReactElement;
}

const Input = (props: inputProps): React.ReactElement => {
    const inputJson = (props: inputProps): InputJsonProps => {
        return {
            outline: <OutlineInput {...props} />,
            normal: <NormalInput {...props} />,
        };
    };

    return <div>{inputJson(props)[props.type]}</div>;
};

export default Input;
