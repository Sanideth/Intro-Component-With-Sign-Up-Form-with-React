import React from 'react';



function ErrorText(props) {
    const {className, text} = props;
    return (
    <p className={className}>{text}</p>
    )
}



export default ErrorText;