import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth-context";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signUp({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

  const encodedToken = localStorage.getItem("token");

  return (
    <div className="pt-8 flex">
      <aside className="sidebar-log mr-4">
        <img
          className="responsive-image"
          src="/images/signup.jpeg"
          alt="A girl on a motorcylce"
        />
      </aside>
      <main className="products-display grow flex-center flex-col my-8">
        <div>
          <form onSubmit={submitHandler} className="signup-form">
            <div className="form">
              <div className="mb-2">
                <span>First Name</span>
              </div>
              <input
                value={firstName}
                onChange={firstNameHandler}
                className="w-92"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="form">
              <div className="my-2">
                <span>Last Name</span>
              </div>
              <input
                value={lastName}
                onChange={lastNameHandler}
                className="w-92"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="form">
              <div className="my-2">
                <span>Email</span>
              </div>
              <input
                value={email}
                onChange={emailHandler}
                className="w-92"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="form">
              <div className="my-2">
                <span className="password">Password</span>
              </div>
              <input
                value={password}
                onChange={passwordHandler}
                className="w-92"
                type="text"
                name="password"
                id="password"
                required
              />
              <i
                className="fa fa-eye-slash hide-password-2"
                aria-hidden="true"
              ></i>
            </div>
            <div className="form my-2">
              <input className="btn-link w-92" type="submit" value="Sign Up " />
            </div>
            <div className="mt-8 fs-5">
              <span>Already have an account ?</span>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
