import React from 'react';


function PrimaryText(props) {
    const {className, text} = props;
    return(
        <p className={className}>{text}</p>
    )
}


export default PrimaryText;