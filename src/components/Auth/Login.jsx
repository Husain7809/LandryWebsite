
import './login.css'
const Login = () => {
    return (
        <>
            <div id="info">
            </div><div id="container">
                <div id="cover">
                    <h1 className="sign-up">Hello, Guess!</h1>
                    <p className="sign-up">Enter your personal details<br /> and start a journey with us</p>
                    <a className="button sign-up" href="#cover">Sign Up</a>
                    <h1 className="sign-in">Welcome Back!</h1>
                    <p className="sign-in">To keep connected with us please<br /> login with your personal info</p>
                    <br />
                    <a className="button sub sign-in" href="#">Sign In</a>
                </div>
                <div id="login">
                    <h1>Sign In</h1>
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" /></a>&nbsp;
                    <p>or use your email account:</p>
                    <form action='/admin/dashboard'>
                        <input type="email" placeholder="Email" /><br />
                        <input type="password" placeholder="Password" /><br />
                        <a id="forgot-pass" href="#">Forgot your password?</a><br />
                        <input className="submit-btn" type="submit" value="Sign In" />
                    </form>
                </div>
                <div id="register">
                    <h1>Create Account</h1>
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" /></a>&nbsp;
                    <p>or use your email for registration:</p>
                    <form>
                        <input type="text" placeholder="Name" /><br />
                        <input type="email" placeholder="Email" /><br />
                        <input type="password" placeholder="Password" /><br />
                        <input className="submit-btn" type="submit" value="Sign Up" />
                    </form>
                </div>
            </div></>


    )
}

export default Login
