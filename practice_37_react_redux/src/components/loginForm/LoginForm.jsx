import React, { useCallback } from "react";
import { useState } from "react";
import Button from "../button/Button";
import AttemptsList from "./AttemptsList";
import { useDispatch } from "react-redux";
import { addUserDataAction } from "../../store/actions/userActions";

export default function LoginForm(props) {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState( { login: '', pwd: '' } );

    const [attempts, setAttempts] = useState( [] );

    const dropAttempt = useCallback( (datetime) => {
      const filteredList = attempts.filter((attempt) => attempt.datetime !== datetime);
      setAttempts(filteredList);
    }, [attempts]);

    const addAttempt = (login, pwd) => {
        const attempt = { login, pwd, datetime: new Date().getTime()};
        setAttempts( old => [...old, attempt] );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="login"

                /* for task 6 */
                value={formState.login}
                onChange={e => setFormState(old => ({...old, login: e.target.value}) )}
            />
            <input
                type="password"
                placeholder="password"

                /* for task 6 */
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

            {/* for task 6 */}
            <AttemptsList attempts={attempts} dropAttempt={dropAttempt} />
        </div>
    )
}