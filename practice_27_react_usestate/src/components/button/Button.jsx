/*
* Компонент для рендеринга кнопки
*/


/*
4. Еще немного сложных пропсов. Нам нужно, чтобы наш компонент `Button` принимал проп `clickHandler` - то есть, ссылку на функцию, которая будет вызываться при клике на кнопку. В качестве обработчика, пока что передаем такую функцию: `() => { console.log('click!') }`
*/
import s from './Button.module.css';

export default function Button( props ) {
    //const classNames = s.button + ' ' + (props.isDisabled ? s['button-disabled'] : '');
    let classNam = props.isDisabled ? s["button-disabled"] + " " + s.button : s.button;
    console.log(s, classNam)
    return (
        <button className={classNam} onClick={props.clickHandler}>
            {props.buttonText || "Button" }
        </button>
    );
}