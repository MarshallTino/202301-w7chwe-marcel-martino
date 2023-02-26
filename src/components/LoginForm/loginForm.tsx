import { useState } from "react";
import useUser from "../../hooks/useUser";
import "./loginFormStyles.css";

const LoginForm = (): JSX.Element => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useUser();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await loginUser({
      username,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
          <p className="message"></p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
