/*
* Компонент для рендеринга приветствия
*/

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