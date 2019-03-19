import React, { Component } from 'react';

import './signUp.css';
import Validator from '../validator/validator';

class SignUp extends Component {
    
    constructor(props){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let updateState = {...this.props.state.user};
  
        if(event.target.name === "userName"){
            updateState.userName = event.target.value;
            let enable = ((event.target.value.length>0)? false : true);
            updateState.userNameValidate = enable;
            this.props.update(updateState);
        } 
        else if (event.target.name === "email"){
            updateState.email = event.target.value;
            const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            let enable = false;
            if (re.test(updateState.email) && (event.target.value.length>0)){
                enable = false;
            }else{
                enable = true;
            }
            let enableValidation = this.handleVerification(updateState.email,updateState.verifyEmail);
            updateState.emailValidate = enable;
            updateState.confirmEmail = enableValidation;
            this.props.update(updateState);
        }
        else if (event.target.name === "confirmEmail"){
            updateState.verifyEmail = event.target.value;
            let enableValidation = this.handleVerification(updateState.email,updateState.verifyEmail);
            updateState.confirmEmail = enableValidation;
            this.props.update(updateState);
        }
        else if (event.target.name === "password"){
            updateState.password = event.target.value;
            let enableValidation = this.handleVerification(updateState.password,updateState.verifyPassword);
            let enable = ((event.target.value.length>4)? false : true);
            updateState.passwordValidate = enable;
            updateState.confirmPassword = enableValidation;
            this.props.update(updateState);
        }
        else if (event.target.name === "confirmPassword"){
            updateState.verifyPassword = event.target.value;
            let enableValidation = this.handleVerification(updateState.password,updateState.verifyPassword);
            updateState.confirmPassword = enableValidation;
            this.props.update(updateState);
        }
        else if (event.target.name === "contact"){
            updateState.contact = event.target.value;
            let regex = (/^[0-9]+$/);
            let enable = false;
            if(regex.test(updateState.contact) && (event.target.value.length===10)){
                enable = false;
            }else{
                enable = true;
            }
            updateState.contactValidate = enable;
            this.props.update(updateState);
        }
    }

    handleVerification(value,verifyValue){
        if(value===verifyValue){
            return false;
        }else{
            return true;
        }
    }

    enableSubmit(){
        let validate = false;
        let userValues = false;
        let disable = true;
        let user = {...this.props.state.user};
        if(!(user.userNameValidate && user.emailValidate && user.confirmEmail && 
            user.passwordValidate && user.confirmPassword && user.contactValidate)){
                validate = true;
            }
        if((user.userName.length>0) && (user.email.length>0) && (user.verifyEmail.length>0) && 
            (user.password.length>0) && (user.verifyPassword.length>0) && (user.contact.length>0)){
                userValues = true;
            }
        if(validate && userValues){
            disable = false;
            return disable;
        }else{
            disable = true;
            return disable;
        }
    }

    render(){

        return(
            <div>
                <div className="signUp">
                    <header className="signUp-header">SignUp Form</header>
                    <form name="signUpForm">
                        <label>User Name </label>
                        <input type="text" name="userName" value={this.props.state.user.userName} onChange={this.handleChange}/>
                        
                        <Validator name="userName" value={this.props.state.user.userName} validate={this.props.state.user.userNameValidate}></Validator>
                        
                        <label>Email </label>
                        <input type="email" name="email" value={this.props.state.email} onChange={this.handleChange}/>
                        
                        <Validator name="email" value={this.props.state.user.email} validate={this.props.state.user.emailValidate}></Validator>
                        
                        <label>Confirm Email </label>
                        <input type="email" name="confirmEmail" value={this.props.state.user.verifyEmail} onChange={this.handleChange}/>
                        
                        <Validator name="confirmEmail" value={this.props.state.user.verifyEmail} validate={this.props.state.user.confirmEmail}></Validator>
                        
                        <label>Password </label>
                        <input type="password" name="password" value={this.props.state.password} onChange={this.handleChange}/>
                        
                        <Validator name="password" value={this.props.state.user.password} validate={this.props.state.user.passwordValidate}></Validator>
                        
                        <label>Confirm Password </label>
                        <input type="password" name="confirmPassword" value={this.props.state.user.verifyPassword} onChange={this.handleChange}/>
                        
                        <Validator name="confirmPassword" value={this.props.state.user.verifyPassword} validate={this.props.state.user.confirmPassword}></Validator>
                        
                        <label>Contact Number</label>
                        <input type="text" name="contact" value={this.props.state.user.contact} onChange={this.handleChange}/>
                        
                        <Validator name="contact" value={this.props.state.user.contact} validate={this.props.state.user.contactValidate}></Validator>
                        
                        <button type="submit" onClick={this.props.submit} disabled={this.enableSubmit()}>Submit</button>
                    </form>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default SignUp;