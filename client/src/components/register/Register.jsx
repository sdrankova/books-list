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
            setconfirmPasswordError('ERROR')
        } else {
            setconfirmPasswordError('');
        }
    };

    return (
        <div className="form_container">
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
                    placeholder="First name"
                />

                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    name={RegisterFormKeys.LastName}
                    id={RegisterFormKeys.LastName}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.LastName]}
                    placeholder="Last name"
                />

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name={RegisterFormKeys.Username}
                    id={RegisterFormKeys.Username}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Username]}
                    placeholder="Username"
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name={RegisterFormKeys.Email}
                    id={RegisterFormKeys.Email}
                    onChange={changeHandler}
                    value={formValues[RegisterFormKeys.Email]}
                    onBlur={emailValidator}
                    placeholder="Email Address"
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
                    placeholder="Password"
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
                    placeholder="Confirm Password"
                />
                {confirmPasswordError && (
                    <p className='errorText'>{confirmPasswordError}</p>
                )}

                <button>
                    Send
                </button>
            </form>
        </div>
    );
}