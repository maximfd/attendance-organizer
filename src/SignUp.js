import React, { Component } from 'react';
import './SignIn.css';
import * as firebase from 'firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      userName: '',
      email: '',
      password: '',
      signin: false
    };
    this.changeOption = this.changeOption.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 
  signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    // .then((u)=>{console.log(u)})
    .then(
      (userCredentials)=>{
        if(userCredentials.user){
          userCredentials.user.updateProfile({
             displayName: this.state.userName
          })
        }
    })
    
    .catch((error) => {
        console.log(error);
    })
    console.log(this.state.userName)
  }

  changeOption() {
    this.props.updateData(!this.state.signin);
  }

  render() {
    return (
       <div className="loginForm">

          <div className="card-title">
            <h1 className="login-header"><span>pегистрация</span></h1>
          </div>
          <div className="card-content">
            <form>
            <input 
                value={this.state.userName} 
                onChange={this.handleChange} 
                type="text" 
                name="userName" 
                className="form-control" 
                id="firstnameField" 
                placeholder="Фамилия Имя" 
                title="firstname"
                required
              /> 
              <input 
                value={this.state.email} 
                onChange={this.handleChange} 
                type="email" 
                name="email" 
                className="form-control" 
                id="emailField" 
                placeholder="Email" 
                title="email"
                required
              />                    
              <input 
                value={this.state.password} 
                onChange={this.handleChange} 
                type="password" 
                name="password"
                className="form-control" 
                id="passwordField" 
                placeholder="Пароль"
                title="password"
                required
              />
               
              
                
                <button onClick={this.signup} className="btnLogin">Регистрация</button>
                <div className="hr"></div>
                <button 
                  onClick={() => {  
                    this.changeOption() 
                  }}
                  className="btnOption"
                >Вход</button>
                
            </form>
          </div>
        </div>
    );
  }
}
export default Signup;