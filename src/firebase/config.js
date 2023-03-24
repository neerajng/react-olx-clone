import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQXkYXc1Ewaa8w_qbmXgzvD25gV2cE_Sg",
    authDomain: "react-olx-clone-ac54c.firebaseapp.com",
    projectId: "react-olx-clone-ac54c",
    storageBucket: "react-olx-clone-ac54c.appspot.com",
    messagingSenderId: "888542419692",
    appId: "1:888542419692:web:96972c32477ff952a7e3c9",
    measurementId: "G-BCJ72HLRV4"
  };

  export default firebase.initializeApp(firebaseConfig)