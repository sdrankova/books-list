import { useContext } from "react";
import useForm from "../../hooks/UseForm";
import AuthContext from "../../contexts/AuthContext";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { formValues, changeHandler, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <div className="form_container">
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name={LoginFormKeys.Email}
                    id={LoginFormKeys.Email}
                    onChange={changeHandler}
                    value={formValues[LoginFormKeys.Email]}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    name={LoginFormKeys.Password}
                    id={LoginFormKeys.Password}
                    onChange={changeHandler}
                    value={formValues[LoginFormKeys.Password]}
                    placeholder="Password"
                />
                <button>
                    Send
                </button>
            </form>
        </div>
    );
}