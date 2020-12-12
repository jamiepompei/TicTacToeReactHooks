import React from 'react';

const style = {
        background: 'plum',
        border: '2px solid purple',
        fontType: 'Calibri',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
};

const Square = ({ value, onClick}) => (
<button style={style} onClick={onClick}>
    {value}
</button>
);

export default Square;