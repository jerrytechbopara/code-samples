import React from 'react';

interface SizeBoxProps {
    height?: number;
    width?: number;
}

const SizeBox = (props: SizeBoxProps): React.ReactElement => {
    return <div style={{ width: props.width, height: props.height }} />;
};

export default SizeBox;
