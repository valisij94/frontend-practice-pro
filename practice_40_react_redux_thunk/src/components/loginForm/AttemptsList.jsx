import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropAttemptAction } from "../../store/actions/attemptsActions";

const AttemptsList = () => {

  const attemptsArray = useSelector(state => state.attemptsArrayState);
  const dispatch = useDispatch();

  return (<div>
    {attemptsArray.map(attempt => (
      <p onClick={ () => {
        dispatch(dropAttemptAction(attempt.id))
      } } key={attempt.id}>{`${attempt.login} ${attempt.pwd} ${attempt.id}`}</p>
    ))}
  </div>);
};

  export default AttemptsList;