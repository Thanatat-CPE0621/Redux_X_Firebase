import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD8XOiNKR5ITH41AvkpwhgJU-tf87KHHsY",
    authDomain: "projectcreated-8dfff.firebaseapp.com",
    databaseURL: "https://projectcreated-8dfff.firebaseio.com",
    projectId: "projectcreated-8dfff",
    storageBucket: "projectcreated-8dfff.appspot.com",
    messagingSenderId: "872262703318"
  };
  
  firebase.initializeApp(config);

  firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase;
