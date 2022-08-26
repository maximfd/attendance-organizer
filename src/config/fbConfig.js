import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

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
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;