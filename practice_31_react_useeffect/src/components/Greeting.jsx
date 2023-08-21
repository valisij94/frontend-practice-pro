/*
* Компонент для рендеринга приветствия
*/

import { useEffect, useState } from "react";

export default function Greeting() {
    let user = {
        name: 'Vasya', status: 'active'
    };

    /*
    3. Дорабатываем компонент `Greeting`. Мы хотим, чтобы в нем отображались текущие время и дата с точностью до секунды. Нам нужно в компоненте `Greeting`, добавить параграф, в котором будет отображаться время и дата. При этом, это должно обновляться каждую секунду.
    */

    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect( () => {
        console.log('Component is mounted!');

        const updater = setInterval( () => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearInterval(updater);
            console.log('Component will be unmounted!');
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