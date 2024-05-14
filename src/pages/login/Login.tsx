export default function Login() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <div className="buttons">
        <button className="signup">Sign Up</button>
        <button className="signin">Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" id="password" placeholder="Password" />
        <span className="toggle-password"><i className='bx bx-hide' ></i></span>
        <button type="submit">Sign Up</button>
      </form>
      <div className="seperator">
        <span>OR</span>
      </div>
      <div className="social-icons">
        <div className="icon-circle">
          <i className="bx bxl-google"></i>
        </div>
        <div className="icon-circle">
          <i className="bx bxl-facebook"></i>
        </div>
        <div className="icon-circle">
          <i className="bx bxl-linkedin"></i>
        </div>
        <div className="icon-circle">
          <i className="bx bxl-github"></i>
        </div>
      </div>
    </div>
  );
}
