import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5DKWwji14Nr2X3ZzSypoFK_0sn7oV5Lc",
    authDomain: "simple-note-firebase-1135c.firebaseapp.com",
    databaseURL: "https://simple-note-firebase-1135c.firebaseio.com",
    projectId: "simple-note-firebase-1135c",
    storageBucket: "simple-note-firebase-1135c.appspot.com",
    messagingSenderId: "838063527357",
    appId: "1:838063527357:web:072d760eca0fcc172b6ed4",
    measurementId: "G-0FDECK0X4X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export const database = firebase.database();



export default firebase;
