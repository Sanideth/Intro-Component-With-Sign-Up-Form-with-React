import React from 'react';
import Input from './Input';
import errorIcon from '../img/icon-error.svg'
import Image from './Image';
import Button from './Button';
import ErrorText from './ErrorText';
import TermsText from './TermsText';


class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            usernameValue: "",
            lastnameValue: "",
            emailValue: "",
            passwordValue: "",
            imageClassName : "main__form-error-icon",
            errorTextClassName : "main__form-error-text",
            
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const usernameInput  = e.target.children[0].firstElementChild;
        const lastnameInput = e.target.children[1].firstElementChild;
        const emailInput = e.target.children[2].firstElementChild;
        const passwordInput = e.target.children[3].firstElementChild;
        e.preventDefault();

        if (this.state.usernameValue === "") {
            usernameInput.classList.add('error-border');
            usernameInput.nextElementSibling.classList.add('error-insert');
            usernameInput.nextElementSibling.nextElementSibling.classList.add('error-insert');
        } else {
           usernameInput.classList.remove('error-border');
           usernameInput.nextElementSibling.classList.remove('error-insert')
           ;
           usernameInput.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
        if (this.state.lastnameValue === "") {
            lastnameInput.classList.add('error-border');
            lastnameInput.nextElementSibling.classList.add('error-insert');
            lastnameInput.nextElementSibling.nextElementSibling.classList.add('error-insert');
        } else {
           lastnameInput.classList.remove('error-border');
           lastnameInput.nextElementSibling.classList.remove('error-insert')
           ;
           lastnameInput.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
        if (this.state.emailValue === "" && !this.state.emailValue.includes('@') && !this.state.emailValue.includes('.')) {
            emailInput.classList.add('error-border');
            emailInput.nextElementSibling.classList.add('error-insert');
            emailInput.nextElementSibling.nextElementSibling.classList.add('error-insert');
        } else {
           emailInput.classList.remove('error-border');
           emailInput.nextElementSibling.classList.remove('error-insert')
           ;
           emailInput.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }

        if (this.state.passwordValue === "") {
            passwordInput.classList.add('error-border');
            passwordInput.nextElementSibling.classList.add('error-insert');
            passwordInput.nextElementSibling.nextElementSibling.classList.add('error-insert');
        } else {
           passwordInput.classList.remove('error-border');
           passwordInput.nextElementSibling.classList.remove('error-insert')
           ;
           passwordInput.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
        
    }
    handleUsernameChange(e) {
        
        this.setState({
            usernameValue: e.target.value
        })
        if (e.target.value !== "") {
            e.target.classList.remove('error-border');
            e.target.nextElementSibling.classList.remove('error-insert');
            e.target.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
        
    }
    handleLastnameChange(e) {
        this.setState({
            lastnameValue: e.target.value
        })
        if (e.target.value !== "") {
            e.target.classList.remove('error-border');
            e.target.nextElementSibling.classList.remove('error-insert');
            e.target.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
    }
    handleEmailChange(e) {
        this.setState({
            emailValue: e.target.value
        })
        if (e.target.value !== "" && e.target.value.includes('@') && e.target.value.includes('.')) {
            e.target.classList.remove('error-border');
            e.target.nextElementSibling.classList.remove('error-insert');
            e.target.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
    }
    handlePasswordChange(e) {
        this.setState({
            passwordValue: e.target.value
        })
        if (e.target.value !== "") {
            e.target.classList.remove('error-border');
            e.target.nextElementSibling.classList.remove('error-insert');
            e.target.nextElementSibling.nextElementSibling.classList.remove('error-insert');
        }
    }

    

    
    render() {
        return (
            <form 
            onSubmit={this.handleSubmit}
            className="main__form"
            noValidate={this.props.novalidate}>
              <div className="main__form-field">
                <Input 
                onChange={this.handleUsernameChange}
                type="text" 
                name="firstname" 
                id="firstname" 
                aria-label="User First Name" 
                className="main__form-input" 
                placeholder={"First Name"}
                value={this.state.usernameValue}
                />
                <Image src={errorIcon} alt="Error Icon" className={this.state.imageClassName} />
                <ErrorText 
                className="main__form-error-text" 
                text="First Name cannot be empty"/>
              </div>
              <div className="main__form-field">
                <Input 
                onChange={this.handleLastnameChange}
                type="text" 
                name="lastname" 
                id="lastname"
                aria-label="User lastname" className="main__form-input" 
                placeholder="Last Name"
                value={this.state.lastnameValue} />
                <Image 
                src={errorIcon} 
                alt="Error Icon" 
                className={this.state.imageClassName} />
                <ErrorText 
                className="main__form-error-text" 
                text="Last Name cannot be empty" />
              </div>
              <div className="main__form-field">
                <Input 
                onChange={this.handleEmailChange}
                type="email" 
                name="email" 
                id="email" 
                aria-label="User email" className="main__form-input" 
                placeholder="Email Address"
                value={this.state.emailValue} 
                />
                <Image 
                src={errorIcon} 
                alt="Error Icon" 
                className={this.state.imageClassName} />
                <ErrorText 
                className="main__form-error-text" 
                id="email-error"
                text="Looks like this is not an email" />
              </div>
              <div className="main__form-field">
                <Input 
                onChange={this.handlePasswordChange}
                type="password" 
                name="password" 
                id="password" 
                aria-label="User password" className="main__form-input" 
                placeholder="Password"
                value={this.state.passwordValue} />
                <img 
                src={errorIcon} 
                alt="Error Icon" 
                className={this.state.imageClassName} />
                <ErrorText 
                className="main__form-error-text" 
                text="Password cannot be empty" />
              </div>
              <div className="main__form-field">
                <Button 
                className="btn btn-submit" 
                aria-label="Form Submit Button" 
                id="btn-submit" 
                type="submit" 
                text="Claim your free trial" />
              </div>
              <TermsText />
            </form>
        )
    }
    
}



export default Form;