import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2q3KHVoQ3-5sdG6mVR9OFyCOp73YbE3A",
    authDomain: "twitter-clone-react-90283.firebaseapp.com",
    databaseURL: "https://twitter-clone-react-90283.firebaseio.com",
    projectId: "twitter-clone-react-90283",
    storageBucket: "twitter-clone-react-90283.appspot.com",
    messagingSenderId: "827833042506",
    appId: "1:827833042506:web:7d9f32e5faf8af74d588b3",
    measurementId: "G-PBSWCW6188"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;