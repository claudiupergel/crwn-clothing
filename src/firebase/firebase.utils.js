import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC50MfCRvxwwsUrHQpA9fB10HFbA5pw8uA",
    authDomain: "crwn-db-26da5.firebaseapp.com",
    databaseURL: "https://crwn-db-26da5.firebaseio.com",
    projectId: "crwn-db-26da5",
    storageBucket: "crwn-db-26da5.appspot.com",
    messagingSenderId: "866978102046",
    appId: "1:866978102046:web:e85d05f45698d14a9f670f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  

  export default firebase;