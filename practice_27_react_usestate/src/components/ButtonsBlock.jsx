/*
* Компонент для рендеринга блока кнопок
*/

import Button from "./button/Button";

export default function ButtonsBlock( props ) {
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