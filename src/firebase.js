import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBIH9l0tkQnHCBQOiGCbfM9QUmHps9av7A",
    authDomain: "my-app-1f186.firebaseapp.com",
    projectId: "my-app-1f186",
    storageBucket: "my-app-1f186.appspot.com",
    messagingSenderId: "673258515219",
    appId: "1:673258515219:web:ca7536be4cbdbb4b19c8e6",
    measurementId: "G-BWHRL58TM4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;