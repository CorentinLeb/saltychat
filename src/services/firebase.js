import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAoO3jS1ZKfhSL7i5U6TSt6xf_U6TRaBJk",
    authDomain: "saltychat2.firebaseapp.com",
    projectId: "saltychat2",
    storageBucket: "saltychat2.appspot.com",
    messagingSenderId: "617495150181",
    appId: "1:617495150181:web:26e867200d9ef2bbc5d08c"
};

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth;
export const db = firebase.firestore();