import { useState } from 'react';
import axiosInstance from '../../services/axiosInstance';
import './LoginForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/login', {
                email,
                password,
            });

            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                window.location.href = '/dashboard';
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred during login. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className='wrapper'>
            <div className='login-title'>
                RAuthKey
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input name={"email"} id='emailID' type="text" placeholder={"email"} value={email} onChange={handleEmailChange} />
                </div>
                <div className='input-box'>
                    <input name={"password"} id='passwordID' type="text" placeholder={"password"} value={password} onChange={handlePasswordChange} />
                </div>
                <div className='remember-forgot'>
                    <label htmlFor="">
                        <input type="checkbox" name="remember" id="remember" />
                        Remeber Me
                    </label>
                    <a href="">Forgot Password</a>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className='input-box'>
                    <input type="submit" value="Login" />
                </div>
                <div className='register'>
                    <p>Don&apos;t have and account yet? <a href="">Regsiter</a></p>

                </div>

            </form>
        </div>
    )
}

export default LoginForm