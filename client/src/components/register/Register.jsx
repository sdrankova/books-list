import { useContext, useState } from 'react';
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
    const { registerSubmitHandler, registerError } = useContext(AuthContext);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setconfirmPasswordError] = useState('');

    const { formValues, changeHandler, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.FirstName]: '',
        [RegisterFormKeys.LastName]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    })

    const emailValidator = () => {
        if (!formValues[RegisterFormKeys.Email].includes('@')) {
            setEmailError('Enter a valid email!')
        } else {
            setEmailError('');
        }
    };

    const passwordValidator = () => {
        if (formValues[RegisterFormKeys.Password].length < 8) {
            setPasswordError('Your password should be at least 8 characters.')
        } else {
            setPasswordError('');
        }

        if (formValues[RegisterFormKeys.Password] !== formValues[RegisterFormKeys.ConfirmPassword]) {
            setconfirmPasswordError('Passwords do not match. Please make sure your passwords match before proceeding.')
        } else {
            setconfirmPasswordError('');
        }
    };

    return (
        <div className="form_container form_section">
            <h2>Register</h2>
            {registerError && (
                <p className="errorText">Registration failed: {registerError}</p>
            )}
            <form onSubmit={onSubmit}>

                <label htmlFor="firstName">First name:</label>
                <input
                    type="text"
                    name={RegisterFormKeys.FirstName}
                    id={RegisterFormKeys.FirstName}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.FirstName]}
                />

                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    name={RegisterFormKeys.LastName}
                    id={RegisterFormKeys.LastName}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.LastName]}
                />

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name={RegisterFormKeys.Username}
                    id={RegisterFormKeys.Username}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Username]}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name={RegisterFormKeys.Email}
                    id={RegisterFormKeys.Email}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Email]}
                    onBlur={emailValidator}
                />
                {emailError && (
                    <p className='errorText'>{emailError}</p>
                )}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name={RegisterFormKeys.Password}
                    id={RegisterFormKeys.Password}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Password]}
                    onBlur={passwordValidator}
                />
                {passwordError && (
                    <p className='errorText'>{passwordError}</p>
                )}

                <label htmlFor="password">Confirm Password:</label>
                <input
                    type="password"
                    name={RegisterFormKeys.ConfirmPassword}
                    id={RegisterFormKeys.ConfirmPassword}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.ConfirmPassword]}
                    onBlur={passwordValidator}
                />
                {confirmPasswordError && (
                    <p className='errorText'>{confirmPasswordError}</p>
                )}

                {!emailError && !passwordError && !confirmPasswordError ? (
                    <button type="submit">
                        Send
                    </button>
                ) : (
                    <button disabled>
                        Send
                    </button>
                )}
            </form>
        </div>
    );
}