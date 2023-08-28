/*
* Компонент для рендеринга приветствия
*/

import { useEffect, useState } from "react";

export default function Greeting() {
    let user = {
        name: 'Vasya', status: 'active'
    };

    /*
    5. Вспоминаем работу с таймаутами. У нас компонент `Greeting` рендерится по клику на кнопку. Нужно сделать так, чтобы через 10 секунд после рендеринга, компонент менял цвет фона на `#0096CD`. И также нужно не допуустить, чтобы этот таймер срабатывал, если компонент уже размонтирован. Подсказка - мы также работаем в useEffect, нужно не забыть функцию очистки.
    */

    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect( () => {

        const updater = setInterval( () => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearInterval(updater);
        }
    }, [] );

    return (
        <div>
            <p>Добро пожаловать
                {
                    (user.status === 'active') ? `, ${user.name}` : ""
                }!
            </p>
            <p>{time}</p>
        </div>
    )
};