import React, { useState } from "react";

const withIsAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem("user") === "true"
    );

    const onLogin = () => {
        localStorage.setItem("user", true);
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.setItem("user", false);
        setIsAuth(false);
    };

    return (
        <Component
            {...props}
            isAuth={isAuth}
            onLogin={onLogin}
            onLogOut={onLogOut}
        />
    );
};

export default withIsAuth;
