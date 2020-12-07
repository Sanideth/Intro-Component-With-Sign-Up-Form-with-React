import React from 'react';
import Heading from './Heading';
import PrimaryText from './PrimaryText';
import SecondaryText from './SecondaryText';
import Form from './Form';




function Main(props) {
    return (
        <main 
        className="main">
            <div 
            className="main__text-container">
            <Heading 
            className="heading-primary u-mb-sm" 
            text="Learn to code by watching others"/>
        
            <PrimaryText 
            className="main__text-primary"
            text="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable." />
            </div>
            <div className="main__form-container">
                <div className="main__form-heading u-mb-sm">
                    <SecondaryText 
                    classNameParagraph="main__text-secondary"
                    textParagraph="Try it free 7 days "
                    classNameSpan="main__span"
                    textSpan="then $20/mo. thereafter" />
                </div>
                <Form novalidate="novalidate"/>
            </div>
        </main>
    )
}



export default Main;