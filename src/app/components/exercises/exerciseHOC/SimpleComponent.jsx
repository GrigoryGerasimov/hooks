import React from "react";
import PropTypes from "prop-types";

export const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return (
        isAuth ? <button
            className="btn btn-danger w-100"
            onClick={onLogOut}
        >
            Выйти из системы
        </button> : <button
            className="btn btn-success w-100"
            onClick={onLogIn}
        >
            Войти
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
