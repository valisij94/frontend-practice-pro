/**
 * Здесь мы будем хранить типы экшнов и функции-создатели объектов экшнов, которые
 * имеют отношение к части стейта, которая хранит данные пользователя.
 */

export const userActionTypes = {
    ADD_USER_DATA: 'user/addUserData' // тип экшна, который отвечает за сохранение данных пользователя
}

/*
Функция, которая создает ОБЪЕКТ экшна, который потом попадет в редьюсер. Это так называемый action creator.
*/
export const addUserDataAction = (name, pwd) => {
    return {
        type: userActionTypes.ADD_USER_DATA,
        value: {
            name,
            pwd
        }
    }
}