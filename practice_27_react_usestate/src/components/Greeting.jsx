/*
* Компонент для рендеринга приветствия
*/

import { useState } from "react";

export default function Greeting() {
    let user = {
        name: 'Vasilij', status: 'active'
    };

    return (
        <div>
            <p>Добро пожаловать
                {
                    (user.status === 'active') ? `, ${user.name}` : ""
                }!
            </p>
        </div>
    )
};