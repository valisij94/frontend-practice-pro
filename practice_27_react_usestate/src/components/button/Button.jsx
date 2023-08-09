/*
* Компонент для рендеринга кнопки
*/
import { useState } from 'react';
import s from './Button.module.css';

/*
1. Добавляем счетчик для кнопок. Теперь, наш компонент `Button` должен подсчитывать количество кликов на нем. То есть, нам нужно:
 - добавить в компонент `Button` состояние (хук `useState`)
 - в компоненте `Button` нужно также поменять `clickHandler`: он должен теперь изменять состояние компонента (инкрементировать счетчик).
 - в коде самого компонента (перед `return`), нужно выводить в консоль значение счетчика (`console.log(counter);`) - просто для проверки того, что стейт работает.
 */
export default function Button( props ) {

    const [count, setCount] = useState(0);

    let classNam = props.isDisabled ? s["button-disabled"] + " " + s.button : s.button;

    console.log(props.buttonText + ', now count: ' + count);

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