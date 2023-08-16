/*
* Компонент для рендеринга блока кнопок
*/

import Button from "./button/Button";

export default function ButtonsBlock( props ) {
    return (
        <div>
            {props.userData.status !== 'active' && <Button theme={props.theme} buttonText="Вход"/>}
            {props.userData.status !== 'active' && <Button theme={props.theme} buttonText="Регистрация"/>}
            {props.userData.status === 'active' && <Button theme={props.theme} buttonText="Профиль"/>}
            <Button
                theme={props.theme}
                //isDisabled={true}
                clickHandler={ () => { console.log('click'); } }
                buttonText="Корзина"
            />
        </div>
    );
}