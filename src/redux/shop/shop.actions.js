import shopActionTypes from './shop.type';

import { firestore, convertSnapshotToObject } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => {
    return {
        type: shopActionTypes.FETCH_COLLECTION_START
    };
};

export const fetchCollectionSuccess = collectionObject => {
    return {
        type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: collectionObject
    };
};

export const fetchCollectionFailure = errorMessage => {
    return {
        type: shopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    };
};

// dispatch a function instead of object, allowed by redux-thunk middleware
export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get()
            .then(doc => {
                const convertedObject = convertSnapshotToObject(doc);
                dispatch(fetchCollectionSuccess(convertedObject));
            })
            .catch(error => dispatch(fetchCollectionFailure(error.message)));
    };
};