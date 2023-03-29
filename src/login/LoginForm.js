import logo from '../images/logo.png';


function LoginForm({ handleSubmit, handleChange, handleGoogleLogin, message }) {
return (
    <div className="App">
    <img src={logo} alt="Logo" /> {/* Add the logo image */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <div className="social-login-container">
        <div id="google-signin-button" onClick={handleGoogleLogin}></div>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;