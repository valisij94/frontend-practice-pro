/*
* Компонент для рендеринга кнопки
*/
import s from './Button.module.css';

export default function Button( props ) {
    let classNam = props.isDisabled ? s["button-disabled"] + " " + s.button : s.button;
    return (
        <button className={classNam} onClick={props.clickHandler}>
            {props.buttonText || "Button" }
        </button>
    );
}