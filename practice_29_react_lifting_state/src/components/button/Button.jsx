/*
* Компонент для рендеринга кнопки
*/
import s from './Button.module.css';

export default function Button( props ) {

    let classNam = props.isDisabled ? s['button-disabled'] : '';

    return (
        <button className={`${s.button} ${classNam}`} onClick={ () => {
                if (!!props.clickHandler) props.clickHandler();
            }
        }>
            {props.buttonText || "Button" }
        </button>
    );
}