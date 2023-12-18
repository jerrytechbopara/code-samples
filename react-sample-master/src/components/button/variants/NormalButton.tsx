import React from 'react';
import '../Button.scss';
import type { ButtonProps } from '../type';

const NormalButton = (props: ButtonProps): React.ReactElement => {
    return (
        <div className="normalButtonBody">
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default NormalButton;
