/*
* Компонент для рендеринга приветствия
*/

import { useContext } from "react"
import { UserContext } from "../context/context"

export default function Greeting() {

    const userInfo = useContext(UserContext);
    return (
        <div>
            <p>Добро пожаловать
                {
                    (userInfo.user.status === 'active') ? `, ${userInfo.user.name}` : ""
                }!
            </p>
        </div>
    )
};