import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyBKEigOoxZcfhSpdpMLpLNQS3Aln6ovOyU",
    authDomain: "tinder-a249a.firebaseapp.com",
    databaseURL: "https://tinder-a249a.firebaseio.com",
    projectId: "tinder-a249a",
    storageBucket: "tinder-a249a.appspot.com",
    messagingSenderId: "508300087864",
    appId: "1:508300087864:web:87f9dc9a82628bb2250ccd",
    measurementId: "G-4LCFGWCR9S"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database