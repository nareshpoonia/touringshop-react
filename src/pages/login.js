import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth-context";

function Login() {
  const { login, guestLogin } = useAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login({
      email: loginEmail,
      password: loginPassword,
    });
  };
  const loginEmailHandler = (e) => {
    setLoginEmail(e.target.value);
  };
  const loginPasswordHandler = (e) => {
    setLoginPassword(e.target.value);
  };

  const guestLoginHandler = () => {
    guestLogin();
  };

  return (
    <div>
      <div className="pt-8 flex">
        <aside className="sidebar-log mr-4">
          <img
            className="responsive-image"
            src="/images/signup.jpeg"
            alt="A girl on a motorcylce"
          />
        </aside>
        <main className="products-display grow flex-center flex-col">
          <div>
            <form onSubmit={loginSubmitHandler} className="form mt-8">
              <div className="form">
                <div className="mb-2">
                  <span>Email</span>
                </div>
                <input
                  className="w-92"
                  type="email"
                  name="email"
                  value={loginEmail}
                  onChange={loginEmailHandler}
                  id="email"
                  required
                />
              </div>
              <div className="form">
                <div className="my-2">
                  <span className="password">Password</span>
                </div>
                <input
                  className="w-92"
                  type="text"
                  name="password"
                  value={loginPassword}
                  onChange={loginPasswordHandler}
                  id="password"
                  required
                />
                <i
                  className="fa fa-eye-slash hide-password"
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <input
                  className="my-4"
                  type="checkbox"
                  id="Remember"
                  name="Remember"
                />
                <label className="fs-5 mx-4" for="Remember">
                  Remember me
                </label>
                <span className="fs-5 mx-4" for="Remember">
                  Forgot Password ?
                </span>
              </div>
              <div className="form">
                <input
                  className="btn-link w-92"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <div className="mt-8 fs-5">
                <span>Need an account ?</span>
                <Link to="/signup">Create an account</Link>
              </div>
            </form>
            <button onClick={guestLoginHandler} className="mt-8 btn-link w-92">
              Guest Sign In
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
