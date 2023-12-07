import { useContext } from "react";
import useForm from "../../hooks/UseForm";
import AuthContext from "../../contexts/AuthContext";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler, loginError } = useContext(AuthContext);
    const { formValues, changeHandler, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <div className="form_container form_section">
            <h2>Login</h2>
            {loginError && (
                <p className="errorText">Login failed: {loginError}</p>
            )}
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    name={LoginFormKeys.Email}
                    id={LoginFormKeys.Email}
                    onChange={changeHandler}
                    value={formValues[LoginFormKeys.Email]}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name={LoginFormKeys.Password}
                    id={LoginFormKeys.Password}
                    onChange={changeHandler}
                    value={formValues[LoginFormKeys.Password]}
                />
                <button>
                    Login
                </button>
            </form>
        </div>
    );
}