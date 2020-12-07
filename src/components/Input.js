import React from 'react';



function Input(props) {
    const {type, name, id, className, placeholder} = props;
    return (
        <input type={type} name={name}id={id} aria-label={props['aria-label']} className={className} placeholder={placeholder} onChange={props.onChange} />
    )
}



export default Input;