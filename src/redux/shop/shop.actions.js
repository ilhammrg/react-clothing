import shopActionTypes from './shop.type';

export const updateShopData = collectionObject => {
    return {
        type: shopActionTypes.UPDATE_SHOP_DATA,
        payload: collectionObject
    };
};