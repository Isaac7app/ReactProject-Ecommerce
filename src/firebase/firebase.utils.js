import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCr_kAM1DyEXb6l2Vy_hIMsBjrSuxgBqUI",
    authDomain: "crwn-clothes-db-92d06.firebaseapp.com",
    projectId: "crwn-clothes-db-92d06",
    storageBucket: "crwn-clothes-db-92d06.appspot.com",
    messagingSenderId: "1083986131563",
    appId: "1:1083986131563:web:79a6339185c5f24f9fcf2e",
    measurementId: "G-1GE0XX4XZF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;