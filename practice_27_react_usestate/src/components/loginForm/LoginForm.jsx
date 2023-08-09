/*
2. Создаем компонент `LoginForm`. Для этого, в папке `components`, создаем папку `loginForm`, и в ней - компонент. Он должен содержать:
 - текстовое поля для ввода логина (инпут с классом input)
 - кнопку "Войти". Используем наш компонент `Button`, а не просто кнопку браузера.
 - БОНУС: вспоминаем стили. Добавляем CSS-модуль для нашего текстового поля, и там определяем класс `input`. У него должны быть:
     - внутренний отступ - 10 пикселей
     - закругленные углы (5 пикселей)
     - рамка - толщина 1 пиксель, сплошная, цвет lightgray
    */

import { useState } from "react";
import Button from "../button/Button";
import styles from './LoginForm.module.css';

export default function LoginForm() {

/*
4. Усложняем стейт.
 - Добавляем в наш компонент `LoginForm` поле для ввода пароля. Это тоже инпут, с классом `input`, и типом `passwd`.
 - Значение его также должно храниться в стейте компонента. Рекомендуется заменить стейт `login`, созданный ранее, на объект `formState`, в котором будут храниться значения полей login, passwd, и использовать его в качестве стейта. ВАЖНО! При работе с объектом, не забываем, что при изменении какого-то поля нам нужно не потерять значение второго поля.
*/
    const [formState, setFormState] = useState({
        login: '',
        passwd: ''
    });

    console.log('Rendering component, state now is: ' + JSON.stringify(formState) )
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Login"
                value={formState.login}

                onChange={ (event) => { setFormState( (oldState) => {
                    return { ...oldState, login: event.target.value}
                }) } }
            />
            <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={formState.passwd}
                onChange={ (event) => {
                    //setFormState({})
                    setFormState( (oldState) => {
                        return { ...oldState, passwd: event.target.value }
                    })
                }}
            />
            <Button buttonText="Enter" />
        </div>
    )
}