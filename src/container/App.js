import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SignUp from '../component/signUp/signUp';
import Modal from '../component/modal/modal';

class App extends Component {
  
  constructor(){
    super();
      this.state ={
        user:{
          userName:'',
          password:'',
          verifyPassword:'',
          email:'',
          verifyEmail:'',
          contact:'',
          userNameValidate: false,
          passwordValidate: false,
          emailValidate: false,
          contactValidate: false,
          confirmEmail:false,
          confirmPassword:false,
        },
        isValidated: true,
        showModal:false,
        isSubmit: false,
      };

    this.submitHandler = this.submitHandler.bind(this);
    let message = '';
    }
  
  updateHandler = (value) => {
      let temp = {...this.state};
      temp.user = value;
      this.setState({user:temp.user});
  }

  submitHandler(event) {
    console.log("Submit");
    event.preventDefault();
    let self =this;    
    axios.post('http://dummy.restapiexample.com/api/v1/create', {
        name: this.state.user.userName,
        salary: '5000',
        age: '30'
      })
      .then(function (response) {
          console.log('POST');
          self.message="SUCCESS!!!";
          self.toggleModal();
        })
        .catch(function (error) {
          console.log('POST',error);
          self.message = "FAILED!!!";
          self.toggleModal();
        
    });
  }
    

  toggleModal = () => {
    console.log("Toggle");
    this.setState({
        showModal:!this.state.showModal
    });
  }

  render() {
    return (
      <div className="App">
        <header className ="App-header">
            <h1>Welcome to Test App</h1>
        </header>
        <Modal show={this.state.showModal} onClose={this.toggleModal} 
              message={this.message}></Modal>    
        <SignUp state={this.state} update={this.updateHandler} submit={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
