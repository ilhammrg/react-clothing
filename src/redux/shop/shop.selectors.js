import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : null
);

export const selectCollection = memoize(collectionID => {
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collectionID] : null
    );
});