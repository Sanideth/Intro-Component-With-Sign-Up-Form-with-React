import React from 'react';


function SecondaryText(props) {
    const {classNameParagraph, classNameSpan, textParagraph, textSpan} = props;
    return(
        <p className={classNameParagraph}>{textParagraph} 
        <span className={classNameSpan}>{textSpan}
        </span>
        </p>

    )
}



export default SecondaryText;