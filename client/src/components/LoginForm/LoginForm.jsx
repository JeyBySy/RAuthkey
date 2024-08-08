import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <div className='login-title'>
                RAuthKey
            </div>
            <form action=''>
                <div className='input-box'>
                    <input name={"email"} id='emailID' type="text" placeholder={"email"} />
                </div>
                <div className='input-box'>
                    <input name={"password"} id='passwordID' type="text" placeholder={"password"} />
                </div>
                <div className='remember-forgot'>
                    <label htmlFor="">
                        <input type="checkbox" name="remember" id="remember" />
                        Remeber Me
                    </label>
                    <a href="">Forgot Password</a>
                </div>
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