import React from 'react';
import type { inputProps } from '../type';

const OutlineInput = (props: inputProps): React.ReactElement => {
    return (
        <div>
            <input placeholder={props.placeholder} />
        </div>
    );
};

export default OutlineInput;
