import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import withLoginStyle from './LoginStyled';
import { AuthContext } from 'context/Auth.context';

function Login({ className }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const { setIsConnect } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '')
        {
            setError('Please enter your email');
            return;
        } else if (password === '') {
            setError('Please enter your password');
            return;
        } else if (email !== 'test@test.com' || password !== 'test') {
            setError('email or password incoorect');
            return;
        }
        setIsConnect(true);
        history.push('/todo');
    }

    return (
        <div className={className}>
            <h1>Welcome</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email *"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password *"
                />
                <div className="error">
                    {error}
                </div>
                <button>LOGIN</button>
            </form>
        </div>
    )
}

export default withLoginStyle(Login)
