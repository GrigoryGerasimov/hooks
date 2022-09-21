import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
       console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>Log Out</button>
    );
};

const areEqual = (prevState, currentState) => !(prevState.onLogOut !== currentState.onLogOut);

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

LogOutButton.propTypes = {
    onLogOut: PropTypes.func.isRequired
};

const MemoWithUseCallbackExample = (props) => {
    const [, setState] = useState(false);
    const handleLogOut = useCallback(() => localStorage.removeItem("auth"), []);
    return (
        <>
            <MemoizedLogOutButton onLogOut={handleLogOut}/>
            <button className="btn btn-dark" onClick={() => setState(prevState => !prevState)}>Initiate Rerender</button>
        </>
    );
};

export default MemoWithUseCallbackExample;
