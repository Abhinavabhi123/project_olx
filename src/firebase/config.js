import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE8NY_GjoqjRq_j5TiuID7vShfnJeDw1s",
    authDomain: "olx-clone-c4c68.firebaseapp.com",
    projectId: "olx-clone-c4c68",
    storageBucket: "olx-clone-c4c68.appspot.com",
    messagingSenderId: "184628243469",
    appId: "1:184628243469:web:c8d6d7e41ad21a8b383944",
    measurementId: "G-4XVK4CS2B1"
  };

export default firebase.initializeApp(firebaseConfig)