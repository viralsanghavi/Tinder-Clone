import firebase from 'firebase'

export const firebaseConfig = {
   //Add your Config Here
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database
