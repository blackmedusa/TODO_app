import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACTB2nNH2Br39pWA46gCHrEEAPQ27RNg4",
    authDomain: "todo-app-d7ec5.firebaseapp.com",
    projectId: "todo-app-d7ec5",
    storageBucket: "todo-app-d7ec5.appspot.com",
    messagingSenderId: "329115753480",
    appId: "1:329115753480:web:b4ae09ca33263909e4c5bd",
    measurementId: "G-PXH6L940GQ"
});

const db = firebaseApp.firestore();

export default db;