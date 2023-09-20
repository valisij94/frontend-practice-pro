/**
 * Функциональность корзины
 * ВАЖНО! Все функции - чистые, и все функции возвращают НОВЫЙ объект. Также, предполагается что у
 * корзины нет вложенных объектов.
 */


/**
 * Добавить в корзину товар
 * @param {*} productId ИД товара
 * @param {*} cartInstance Объект с текущим состоянием корзины
 * @returns Новое состояние корзины
 */
const addToCart = (productId, cartInstance) => {
    // возвращаем новый объект состояния
    return {
        // копируем свойства старого состояния
        ...cartInstance,
        // если у нас в старом состоянии такой товар уже был - увеличиваем кол-во товара на 1, иначе - добавляем товар
        [productId] : cartInstance[productId] ? cartInstance[productId] + 1 : 1
    }
}

/**
 * Удаление товара из корзины
 * @param {*} productId ИД товара
 * @param {*} cartInstance Объект с текущим состоянием корзины
 * @returns
 */
const removeFromCart = (productId, cartInstance) => {
    // создаем новый объект состояния, копируем в него свойства старого состояния
    const newCartInstance = { ...cartInstance };
    // если удаляемого товара в корзине нет - просто возвращаем новое состояние
    if (!newCartInstance[productId]) return newCartInstance;
    // если в корзине одна единица этого товара - удаляем его совсем
    if (newCartInstance[productId] === 1) delete newCartInstance[productId];
    // иначе - уменьшаем кол-во на единицу
    else newCartInstance[productId]--;
    // возвращаем новое состояние корзины
    return newCartInstance;
}

// Очистка корзины
const clearCart = () => {
    return {}
}

export {addToCart, removeFromCart, clearCart}