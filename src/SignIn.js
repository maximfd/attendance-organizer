import React, { Component } from 'react';
import './SignIn.css';
import * as firebase from 'firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      signin: true
    };
    this.changeOption = this.changeOption.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    })
    .then((u)=>{console.log(u)})
    
    .catch((error) => {
        console.log(error);
      });
  }

  changeOption() {
    this.props.updateData(!this.state.signin);
  }

  render() {
    return (
       <div className="loginForm">

          <div className="card-title">
            <h1 className="login-header">я<span>здесь</span></h1>
          </div>
          <div className="card-content">
            <form>
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
               
              
                <button type="submit" onClick={this.login} className="btnLogin">Войти</button>
                <div className="hr"></div>
                <button 
                  onClick={() => {  
                    this.changeOption() 
                  }}
                  className="btnOption"
                >Регистрация</button>
            </form>
          </div>
        </div>
    );
  }
}
export default SignIn;