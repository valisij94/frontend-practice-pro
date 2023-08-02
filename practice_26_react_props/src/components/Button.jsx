/*
* Компонент для рендеринга кнопки
*/

export default function Button( props ) {
    return (
        <button>{props.buttonText || "Button" }</button>
    );
}