import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 apiKey: "AIzaSyB50mE2vAPGXC1M4lNK2PfbhJKeXcVliq0",
    authDomain: "rijusougata13folio.firebaseapp.com",
    projectId: "rijusougata13folio",
    storageBucket: "rijusougata13folio.appspot.com",
    messagingSenderId: "1010291620636",
    appId: "1:1010291620636:web:b962048a84b29fd3bc58d9",
    measurementId: "G-K2844CXLKM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();