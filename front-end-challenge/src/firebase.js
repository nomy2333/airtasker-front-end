import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqhaTrASdEgyqYNeFFdqifmCf_hnYDIJc",
    authDomain: "airtaskers-87a74.firebaseapp.com",
    databaseURL: "https://airtaskers-87a74.firebaseio.com",
    projectId: "airtaskers-87a74",
    storageBucket: "airtaskers-87a74.appspot.com",
    messagingSenderId: "553947991352",
    appId: "1:553947991352:web:5a8963db70e5df58f6c5cd",
    measurementId: "G-QFRJ0QD9Y7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const fireDB = firebase.database();
const fireAct = fireDB.ref("activity_feed");
const fireLocation = fireDB.ref("locations");
const fireProfile = fireDB.ref("profiles")
const fireTask = fireDB.ref("tasks")
export {
    firebase,
    fireAct,
    fireLocation,
    fireProfile,
    fireTask
}
