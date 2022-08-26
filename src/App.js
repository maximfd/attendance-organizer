import React from 'react';
import './App.css';
import Generator from './Generator';
import QRCode from 'qrcode.react';
import Navbar from './Navbar';
import * as firebase from 'firebase';
import Auth from './Auth';
// import { Router } from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testCode: '555',
      user: null
    };
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
  }

  updateData = (value) => {
    this.setState({ testCode: value })
  }

  componentDidMount() {
    this.authListener();
  }
  
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        console.log(user.displayName);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {    
      return (

        <div>
          {this.state.user ? 
          <div className='qrCode'>
            <Navbar logout={this.logout}/>
            {/* <span>WELCOME, {this.state.user.email}</span>
            <span>WELCOME, {this.state.user.displayName}</span> */}
            <div className='qrField'>
              <QRCode 
                value={this.state.testCode}
                includeMargin = {true} 
                bgColor='#ffffff'
                size = {390}
              />
            </div>
          {/* <span>{this.state.user}</span> */}
            <Generator updateData={this.updateData} user={this.state.user}/>
          </div>
          : (<Auth />)}
        </div>
          
       
      );
  }
  
}

export default App;