export const attemptsActionTypes = {
    ADD_ATTEMPT: 'attempt/addAttempt',
    DROP_ATTEMPT: 'attempt/dropAttempt'
};

export const addAttemptAction = (login, pwd, id) => {
    return {
        type: attemptsActionTypes.ADD_ATTEMPT,
        value: {
            login,
            pwd,
            id
        }
    }
}

export const dropAttemptAction = (id) => {
    return {
        type: attemptsActionTypes.DROP_ATTEMPT,
        value: id
    }
}
