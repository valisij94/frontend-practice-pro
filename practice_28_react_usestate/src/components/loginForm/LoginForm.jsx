import { useState } from "react";
import Button from "../button/Button";
import styles from './LoginForm.module.css';

export default function LoginForm() {

    const [formState, setFormState] = useState({
        login: '',
        passwd: ''
    });

    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Login"
                value={formState.login}

                onChange={ (event) => { setFormState( (oldState) => {
                    return { ...oldState, login: event.target.value}
                }) } }
            />
            <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={formState.passwd}
                onChange={ (event) => {
                    setFormState( (oldState) => {
                        return { ...oldState, passwd: event.target.value }
                    })
                }}
            />
            <Button buttonText="Enter" />
            {/* <DummyComponent clicks={clicks} /> */}
        </div>
    )
}

// Для демонстрации необходимости работы через setState, и работы с НОВЫМ объектом/массивом
function DummyComponent(props) {
    return (
        <div>
            {props.clicks.map( clickData => {
                return <p key={clickData.x+clickData.y}>ClickData: {clickData.x}, {clickData.y}</p>
            })}
        </div>
    );
}