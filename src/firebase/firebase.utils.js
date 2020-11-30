import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDfEN1RIimkyW61ljyo-_s4etOj_o2Ao-4",
	authDomain: "crwn-db-674a0.firebaseapp.com",
	databaseURL: "https://crwn-db-674a0.firebaseio.com",
	projectId: "crwn-db-674a0",
	storageBucket: "crwn-db-674a0.appspot.com",
	messagingSenderId: "323598141413",
	appId: "1:323598141413:web:a5d6adefe4ea07848bd10c",
	measurementId: "G-E95DW6GSZC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const collectionRef = firestore.collection('users')
  const collectionSnapshot = await collectionRef.get()

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
