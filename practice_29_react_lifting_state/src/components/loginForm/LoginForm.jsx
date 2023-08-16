import { useState } from "react";
import Button from "../button/Button";
import styles from './LoginForm.module.css';
import Input from "../input/Input";

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
            <Input
                type="text"
                placeholder="Login"
                value={formState.login}
                onFocus={ focusHandler }
                onChange={ (event) => { setFormState( (oldState) => {
                    return { ...oldState, login: event.target.value}
                }) } }
            />
            <Input
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
        </div>
    )
}