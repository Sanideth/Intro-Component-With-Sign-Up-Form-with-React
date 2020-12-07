import React from 'react';



function Button(props) {
    const {className, id, type, text} = props;
    return (
    <button className={className} aria-label={props['aria-label']} id={id} type={type}>{text}</button>
    )
}



export default Button;