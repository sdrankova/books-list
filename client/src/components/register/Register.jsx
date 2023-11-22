import { useContext } from 'react';
import styles from './Register.module.css';
import AuthContext from '../../contexts/AuthContext';
import useForm from '../../hooks/UseForm';

const RegisterFormKeys = {
    FirstName: 'firstName',
    LastName: 'lastName',
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const { formValues, changeHandler, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.FirstName]: '',
        [RegisterFormKeys.LastName]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    })

    return (
        <div className={styles.form_container}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name={RegisterFormKeys.FirstName}
                    id={RegisterFormKeys.FirstName}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.FirstName]}
                    placeholder="First name"
                />
                <input
                    type="text"
                    name={RegisterFormKeys.LastName}
                    id={RegisterFormKeys.LastName}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.LastName]}
                    placeholder="Last name"
                />
                <input
                    type="text"
                    name={RegisterFormKeys.Username}
                    id={RegisterFormKeys.Username}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Username]}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name={RegisterFormKeys.Email}
                    id={RegisterFormKeys.Email}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Email]}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    name={RegisterFormKeys.Password}
                    id={RegisterFormKeys.Password}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Password]}
                    placeholder="Password"
                />
                <input
                    type="password"
                    name={RegisterFormKeys.ConfirmPassword}
                    id={RegisterFormKeys.ConfirmPassword}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.ConfirmPassword]}
                    placeholder="Confirm Password"
                />
                <button>
                    Send
                </button>
            </form>
        </div>
    );
}