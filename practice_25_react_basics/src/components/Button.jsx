/*
4. Создаем компонент `Button`. Нам нужно сделать так, чтобы компонент `Button` принимал на вход текст кнопки. Пусть этот проп будет `buttonText`. Задача - чтобы текст кнопки брался из пропса `buttonText`.
*/

export default function Button( props ) {
    return (
        <button>{props.buttonText || "Button" }</button>
    );
}