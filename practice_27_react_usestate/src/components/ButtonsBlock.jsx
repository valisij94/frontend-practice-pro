/*
* Компонент для рендеринга блока кнопок
*/

import Button from "./button/Button";

/*
3. Работаем с более сложными пропсами. Наша задача - передать в компонент `ButtonsBlock` проп `userData` с данными нашего пользователя `{name: 'Vasilij', status: 'active'}`. В компоненте, нужно:
  - если статус пользователя = `active` - то показываем кнопки "Профиль", "Корзина".
  - если нет - показыаем кнопки "Вход", "Регистрация", "Корзина".
  */

export default function ButtonsBlock( props ) {

    /*
    6. Работаем с инлайн-стилями. Нам нужно для кнопки "Корзина", сделать следуюшее:
  - цвет фона - `green`
  - цвет текста - `white`
  - внутренние отступы - 10px
  - border-radius: 10px.
  */
    return (
        <div>
            {props.userData.status !== 'active' && <Button buttonText="Вход"/>}
            {props.userData.status !== 'active' && <Button buttonText="Регистрация"/>}
            {props.userData.status === 'active' && <Button buttonText="Профиль"/>}
            <Button
                isDisabled={true}
                clickHandler={ () => { console.log('click'); } }
                buttonText="Корзина"
            />
        </div>
    );
}