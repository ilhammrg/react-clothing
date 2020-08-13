export const addItemToCart = (currentCartItems, cartItemToAdd) => {
    const isItemExist = currentCartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (isItemExist) {
        return currentCartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
        );
    };

    return [...currentCartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (currentCartItems, cartItemToRemove) => {
    const existingItem = currentCartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingItem.quantity === 1) {
        return currentCartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    };

    return currentCartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem    
    );
};