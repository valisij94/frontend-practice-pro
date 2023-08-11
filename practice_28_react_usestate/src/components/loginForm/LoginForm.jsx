import { useState } from "react";
import Button from "../button/Button";
import styles from './LoginForm.module.css';

export default function LoginForm() {

    const [formState, setFormState] = useState({
        login: '',
        passwd: '',
        isError: false
    });

    const [formTracker, setFormTracker] = useState({
        click: 0,
        focus: 0
    });

    console.log('Now state is: ', formTracker);

    const focusHandler = () => {
        setFormTracker( (old) => {
            return {
                ...old,
                focus: old.focus + 1
            };
        } );
     };

    const validateForm = () => {
        if (!!formState.login && !!formState.passwd) {
            setFormState( (old) => {
                return {
                    ...old,
                    isError: false
                }
            })
        }
        else {
            setFormState( (old) => {
                return {
                    ...old,
                    isError: true
                }
            })
        }
    };

    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Login"
                value={formState.login}
                onFocus={ focusHandler }
                onChange={ (event) => { setFormState( (oldState) => {
                    return { ...oldState, login: event.target.value}
                }) } }
            />
            <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={formState.passwd}
                onFocus={ focusHandler }
                onChange={ (event) => {
                    setFormState( (oldState) => {
                        return { ...oldState, passwd: event.target.value }
                    })
                }}
            />
            <Button
                buttonText="Enter"
                clickHandler={ () => {
                    setFormTracker( (old) => {
                        return {
                            ...old,
                            click: old.click + 1
                        }
                    });
                    validateForm();
                } }
            />
            { formState.isError && <p>Fill all fields!</p> }

            { formState.isError ? <p>Fill all fields!</p> : null }

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