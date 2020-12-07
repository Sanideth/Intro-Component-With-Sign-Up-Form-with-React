import React from 'react';



function Heading(props) {
    const {className, text} = props;
    return (
    <h1 className={className}>{text}</h1>
    )
}




export default Heading;