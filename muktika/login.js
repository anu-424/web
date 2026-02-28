import "./SignUp.css";
import logo from "./logo.svg.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/forum");   // 👉 go to forum
  }

  return (
    <div className="auth-container">
      <div className="form-box">
        <h1>Welcome back!</h1>

        <p className="subtitle">
          Get along with your folks and get into creative zone!
        </p>

        <label>Username</label>
        <input placeholder="enter username" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button onClick={handleLogin}>LOGIN</button>
      </div>

      <div className="image-box">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Login;