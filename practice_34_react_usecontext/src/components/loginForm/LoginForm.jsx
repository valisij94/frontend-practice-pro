import { useEffect, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

export default function LoginForm(props) {

    const [formState, setFormState] = useState({
        login: '',
        passwd: '',
        isError: false
    });

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
                theme={props.theme}
                type="text"
                placeholder="Login"
                value={formState.login}
                onChange={ (event) => { setFormState( (oldState) => {
                    return { ...oldState, login: event.target.value}
                }) } }
            />
            <Input
                theme={props.theme}
                type="password"
                placeholder="Password"
                value={formState.passwd}
                onChange={ (event) => {
                    setFormState( (oldState) => {
                        return { ...oldState, passwd: event.target.value }
                    })
                }}
            />
            <Button
                theme={props.theme}
                buttonText="Enter"
                clickHandler={ () => {
                    validateForm();
                } }
            />
            { formState.isError && <p>Fill all fields!</p> }
        </div>
    )
}