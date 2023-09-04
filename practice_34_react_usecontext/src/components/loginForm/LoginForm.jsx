import { useContext, useEffect, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import { ThemeContext, UserContext } from "../../context/context";

export default function LoginForm(props) {

    const { changeTheme } = useContext(ThemeContext);

    const {setUser} = useContext(UserContext);

    const [formState, setFormState] = useState({
        login: '',
        passwd: '',
        isError: false
    });

    const validateForm = () => {
        if (!!formState.login && !!formState.passwd) {
            setUser( old => ({
                ...old,
                name: formState.login
            }));
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
                onChange={ (event) => { setFormState( (oldState) => {
                    return { ...oldState, login: event.target.value}
                }) } }
            />
            <Input
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
                buttonText="Enter"
                clickHandler={ () => {
                    validateForm();
                } }
            />
            <Button
                buttonText="Toggle Theme"
                clickHandler={changeTheme}
            />
            { formState.isError && <p>Fill all fields!</p> }
        </div>
    )
}