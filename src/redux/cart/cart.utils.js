export const addItemToCart = (currentCartItems, cartItemToAdd) => {
    const isItemExist = currentCartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (isItemExist) {
        return currentCartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
        );
    }

    return [...currentCartItems, { ...cartItemToAdd, quantity: 1 }];
};