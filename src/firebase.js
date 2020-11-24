import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt5jZGoJivOr_SM0iFQ8YI_-9QM-kdLH0",
  authDomain: "serapion-test.firebaseapp.com",
  databaseURL: "https://serapion-test.firebaseio.com",
  projectId: "serapion-test",
  storageBucket: "serapion-test.appspot.com",
  messagingSenderId: "735932870858",
  appId: "1:735932870858:web:2f9de9a3e8154894470433"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;