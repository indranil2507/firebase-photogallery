import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyADKJPk3bY8WhENJ8i1U-9V11ex3o8h3eY",
  authDomain: "photo-gallery-6a652.firebaseapp.com",
  projectId: "photo-gallery-6a652",
  storageBucket: "photo-gallery-6a652.appspot.com",
  messagingSenderId: "273016528216",
  appId: "1:273016528216:web:4a447d017d71d0d757592d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
