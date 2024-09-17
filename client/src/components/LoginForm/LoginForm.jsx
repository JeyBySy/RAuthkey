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
                window.location.href = '/'; //Change appropriate endpoint
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred during login. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className='flex flex-col lg:w-[350px] md:w-[90%] w-[90%] m-auto '>
            {/* <div className='text-2xl font-bold mb-2 text-start'>
                RAuthKey
            </div> */}
            <div className='bg-elephant-950 shadow-2xl p-9 rounded-lg '>
                <div className='text-xl pb-3 font-semibold text-center'>
                    Login
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center'>
                    {error && <p className="w-[350px] text-red-600 text-xs bg-red-300 p-3 text-center">{error}</p>}
                    <input className='input' name={"email"} id='emailID' type="text" placeholder={"Email"} value={email} onChange={handleEmailChange} />
                    <input className='input' name={"password"} id='passwordID' type="password" placeholder={"Password"} value={password} onChange={handlePasswordChange} />
                    <input className='w-[250px]  py-2 cursor-pointer hover:bg-elephant-500 bg-elephant-400' type="submit" value="Login" />
                    <p className=' text-slate-500 text-sm'>Forget password?  <a className='underline' href="/reset-password">Click here</a></p>
                    <hr className='divider' />
                    <a className='py-2 border w-[250px] border-none hover:bg-elephant-500 text-center bg-elephant-600' href="/register">Regsiter</a>
                </form>
            </div>

        </div>
    )
}

export default LoginForm