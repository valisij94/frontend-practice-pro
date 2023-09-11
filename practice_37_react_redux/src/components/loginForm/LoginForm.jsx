import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import Button from "../button/Button";
import AttemptsList from "./AttemptsList";

export default function LoginForm(props) {

    // For the task 6

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

    console.log('Redner login form')
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
                    /* for task 6 */
                    addAttempt(formState.login, formState.pwd)
                } }
            />

            {/* for task 6 */}
            <AttemptsList attempts={attempts} dropAttempt={dropAttempt} />
        </div>
    )
}