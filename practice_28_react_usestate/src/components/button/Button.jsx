/*
* Компонент для рендеринга кнопки
*/
import { useState } from 'react';
import s from './Button.module.css';

export default function Button( props ) {

    const [count, setCount] = useState(0);

    let classNam = props.isDisabled ? s["button-disabled"] + " " + s.button : s.button;

    return (
        <button className={classNam} onClick={ () => {
                if (!!props.clickHandler) props.clickHandler();
                setCount( (oldState) => oldState + 1 );
            }
        }>
            {props.buttonText || "Button" }
        </button>
    );
}