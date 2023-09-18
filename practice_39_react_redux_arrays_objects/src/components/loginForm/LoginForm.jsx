import React, { useCallback } from "react";
import { useState } from "react";
import Button from "../button/Button";
import AttemptsList from "./AttemptsList";
import { useDispatch } from "react-redux";
import { addUserDataAction } from "../../store/actions/userActions";

export default function LoginForm(props) {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState( { login: '', pwd: '' } );

    return (
        <div>
            <input
                type="text"
                placeholder="login"
                value={formState.login}
                onChange={e => setFormState(old => ({...old, login: e.target.value}) )}
            />
            <input
                type="password"
                placeholder="password"
                value={formState.pwd}
                onChange={e => setFormState(old => ({...old, pwd: e.target.value}) )}
            />
            <Button
                buttonText="Enter"
                clickHandler={ () => {
                    // мы хотим сохранить данные пользовтаеля в редакс-стейте
                    const actionObject = addUserDataAction(formState.login, formState.pwd);
                    // диспатчим наш экшн - то есть говорим редаксу, что мы хотим обновить стейт
                    dispatch(actionObject);
                } }
            />

            <AttemptsList />
        </div>
    )
}