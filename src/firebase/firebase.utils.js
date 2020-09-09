import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDAGYy0SeYfgzWGuxTxnvFW2vQBC7kAj1U",
    authDomain: "e-commerce-db-27f12.firebaseapp.com",
    databaseURL: "https://e-commerce-db-27f12.firebaseio.com",
    projectId: "e-commerce-db-27f12",
    storageBucket: "e-commerce-db-27f12.appspot.com",
    messagingSenderId: "924133762384",
    appId: "1:924133762384:web:d87ecc48918c707f2c7855",
    measurementId: "G-BKTWPPZHKS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userReference = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userReference.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdDate = new Date();
        try {
            await userReference.set({
                displayName,
                email,
                createdDate,
                ...additionalData
            })
        } catch(error) {
            console.log('Error: ', error);
        }
    }

    return userReference;
}

firebase.initializeApp(config);

// export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);

//     const batch = firestore.batch();
//     objectsToAdd.forEach(collection => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, collection);
//     });

//     return await batch.commit();
// };

export const convertSnapshotToObject = (snapshot) => {
    const snapshotDoc = snapshot.docs;
    const snapshotData = snapshotDoc.map(doc => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title, 
            items
        };
    });
    const newShopData = snapshotData.reduce((accumulator, collectionObject) => {
        accumulator[collectionObject.title.toLowerCase()] = collectionObject;
        return accumulator;
    }, {});

    return newShopData;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export default firebase;