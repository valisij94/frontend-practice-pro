export const cartActionTypes = {
    ADD_TO_CART: 'cart/addToCart', // тип экшна, который отвечает за добавление товара в корзину
    REMOVE_FROM_CART: 'cart/removeFromCart'
};

/*
Функция, которая создает ОБЪЕКТ экшна, который потом попадет в редьюсер. Это так называемый action creator.
*/
export const addToCartAction = (id) => {
    return {
        type: cartActionTypes.ADD_TO_CART,
        value: {
            id
        }
    }
}

export const removeFromCartAction = (id) => {
    return {
        type: cartActionTypes.REMOVE_FROM_CART,
        value: {
            id
        }
    }
}
