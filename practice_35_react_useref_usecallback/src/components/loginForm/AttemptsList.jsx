import React from "react";

const AttemptsList = ({ attempts, dropAttempt }) => {
    console.log("Rendering the attempts");

    return attempts.map((item) => {
      return <div key={item.datetime} onClick={ () => dropAttempt(item.datetime) }>{`${item.login} ${item.datetime}`}</div>;
    });
  };

  export default AttemptsList;