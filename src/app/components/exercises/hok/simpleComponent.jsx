import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    return (
        <Subtitle>
            {isAuth ? (
                <button className="btn btn-primary" onClick={() => onLogOut()}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={() => onLogin()}>
                    Войти
                </button>
            )}
        </Subtitle>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
