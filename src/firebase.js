import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkI5iQObAxI_7u93QnQI0_watQDysgmyA",
    authDomain: "discord-demo-243a9.firebaseapp.com",
    databaseURL: "https://discord-demo-243a9.firebaseio.com",
    projectId: "discord-demo-243a9",
    storageBucket: "discord-demo-243a9.appspot.com",
    messagingSenderId: "27340281122",
    appId: "1:27340281122:web:4d1365b9e628180e0d417b",
    measurementId: "G-DJC3GPLE8E"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth , provider} 
  export default db
