import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';
import * as authService from '../services/authService';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');

    // const [auth, setAuth] = useState(() => {
    //     localStorage.removeItem('accessToken');

    //     return {};
    // });

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.firstName, values.lastName, values.username, values.email, values.password)

        if (!result.message) {
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
            setRegisterError('');
        } else {
            setRegisterError(result.message);
        }
    };


    const loginSubmitHandler = async values => {
        const result = await authService.login(values.email, values.password);
        if (!result.message) {
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
            setLoginError('');
        } else {
            setLoginError(result.message);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        registerSubmitHandler,
        registerError,
        loginSubmitHandler,
        loginError,
        logoutHandler,
        isAuthenticated: !!auth.accessToken,
        username: auth.username,
    }
    
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
