import * as firebase from 'firebase';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY1JJ0NzIDKGM0WULRgQttgLvjkrUHU_k",
  authDomain: "producta-a7c61.firebaseapp.com",
  projectId: "producta-a7c61",
  storageBucket: "producta-a7c61.appspot.com",
  messagingSenderId: "80408383857",
  appId: "1:80408383857:web:3ab672ccda710089e166d0",
  measurementId: "G-MWKRZ4T51N"
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0)
    {
        app = firebase.initializeApp(firebaseConfig);
    }
    else{
        app = firebase.app()
    }

const auth = firebase.auth()
export { auth };