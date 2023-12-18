import React from 'react';
import '../Button.scss';
import type { ButtonProps } from '../type';

const LinearButton = (props: ButtonProps): React.ReactElement => {
    return (
        <div className="linearButtonBody">
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    );
};

export default LinearButton;
