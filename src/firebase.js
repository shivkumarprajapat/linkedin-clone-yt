import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD4XvC-9b6CbMs6g3_ZMTVEJnq5yO6Cw3c",
  authDomain: "linkedin-clone-5897a.firebaseapp.com",
  projectId: "linkedin-clone-5897a",
  storageBucket: "linkedin-clone-5897a.appspot.com",
  messagingSenderId: "674948610586",
  appId: "1:674948610586:web:f3a275546af4b97e952fa3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
