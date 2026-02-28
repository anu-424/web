import "./SignUp.css";
import logo from "./logo.svg.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  function handleRegister() {
    navigate("/forum");   // 👉 go to forum
  }

  return (
    <div className="auth-container">
      <div className="form-box">
        <h1>Sign Up</h1>

        <p>
          Already signed up?{" "}
          <Link to="/login" className="link">
            Login here
          </Link>
        </p>

        <label>Username</label>
        <input placeholder="Enter your username" />

        <label>Email</label>
        <input placeholder="Enter your email" />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your 6-8 character password"
        />

        <label>Repeat password</label>
        <input type="password" placeholder="Enter your password" />

        <button onClick={handleRegister}>Register</button>
      </div>

      <div className="image-box">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default SignUp;