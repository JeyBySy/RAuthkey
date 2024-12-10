import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const { login: setAuth } = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/api/user/login', {
                email,
                password,
            });

            const accessToken = response?.data?.accessToken
            const csrfToken = response?.data?.csrfToken

            setAuth({ email, accessToken, csrfToken })

            if (response.data.success) {
                navigate('/dashboard');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            if (!error?.response) {
                setError('Internal Error: An error occurred during login. Please try again.');
            }
            console.error('Login error:', error);
        }
    };

    return (
        <div className='loginPage flex flex-col lg:w-[350px] md:w-[90%] w-[90%] m-auto '>
            {/* <div className='text-2xl font-bold mb-2 text-start'>
                RAuthKey
            </div> */}
            <div className='bg-elephant-950 shadow-2xl p-9 rounded-lg '>
                <div className='text-2xl pb-3 font-semibold text-center'>
                    Login
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center'>
                    {error && <p className="w-[350px] text-red-600 text-xs bg-red-300 p-3 text-center">{error}</p>}
                    <input className='input' name={"email"} id='emailID' type="text" placeholder={"Email"} value={email} onChange={handleEmailChange} />
                    <input className='input' name={"password"} id='passwordID' type="password" placeholder={"Password"} value={password} onChange={handlePasswordChange} />
                    <input className='w-full  py-2 cursor-pointer hover:bg-elephant-500 bg-elephant-400' type="submit" value="Login" />
                    <p className=' text-slate-500 text-sm'>Forget password?  <a className='underline' href="/reset-password">Click here</a></p>
                    {/* <hr className='divider' />
                    <p className=' text-slate-500 text-sm'>Dont have an account yet?</p>
                    <a className='py-2 w-full  hover:bg-elephant-500 text-center bg-elephant-600' href="/register">Regsiter</a> */}
                </form>
            </div>

        </div>
    )
}

export default LoginForm