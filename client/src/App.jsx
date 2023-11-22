import { Routes, Route, useNavigate } from 'react-router-dom';

import { useRef, useState } from 'react'

import * as authService from './services/authService';
import AuthContext from './contexts/AuthContext';

import Navigation from "./components/navigation/Navigation"
import IndexPage from "./components/index-page/IndexPage"
import AddBook from './components/add-book/AddBook';
import ListBooks from './components/list-books/ListBooks';
import Register from './components/register/Register';
import Path from './paths';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

function App() {
    const formRef = useRef();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

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
        <>
            <AuthContext.Provider value={values}>
                <Navigation />
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/create-book' element={<AddBook formRef={formRef} />} />
                    <Route path='/list-books' element={<ListBooks />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </AuthContext.Provider>
        </>
    )
}

export default App
