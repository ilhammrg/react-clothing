import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDAGYy0SeYfgzWGuxTxnvFW2vQBC7kAj1U",
    authDomain: "e-commerce-db-27f12.firebaseapp.com",
    databaseURL: "https://e-commerce-db-27f12.firebaseio.com",
    projectId: "e-commerce-db-27f12",
    storageBucket: "e-commerce-db-27f12.appspot.com",
    messagingSenderId: "924133762384",
    appId: "1:924133762384:web:d87ecc48918c707f2c7855",
    measurementId: "G-BKTWPPZHKS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;