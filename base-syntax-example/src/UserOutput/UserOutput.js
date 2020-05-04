import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
      <div className="UserOutput">
        <p>Username: {props.userName} </p>
        <p>Time to go outside!!</p>
      </div>
    );
};

export default userOutput;