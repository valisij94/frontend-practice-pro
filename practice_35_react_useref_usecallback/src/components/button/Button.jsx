/*
* Компонент для рендеринга кнопки
*/
import { useContext } from 'react';
import s from './Button.module.css';
import { ThemeContext } from '../../context/context';

export default function Button( props ) {

    const {theme} = useContext(ThemeContext);

    let classNam = props.isDisabled ? s['button-disabled'] : '';

    return (
        <button className={`
                ${s.button}
                ${classNam}
                ${theme === 'dark' ? s.buttonDark : s.buttonLight}
            `} onClick={ () => {
                if (!!props.clickHandler) props.clickHandler();
            }
        }>
            {props.buttonText || "Button" }
        </button>
    );
}