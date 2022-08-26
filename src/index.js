import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBNHs9pe6bkNLr2lOnSgZh84TrSmpUC3xo",
    authDomain: "qr-app-d5294.firebaseapp.com",
    databaseURL: "https://qr-app-d5294.firebaseio.com",
    projectId: "qr-app-d5294",
    storageBucket: "qr-app-d5294.appspot.com",
    messagingSenderId: "985120851232",
    appId: "1:985120851232:web:7dfec978c3803d79bf8345"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();