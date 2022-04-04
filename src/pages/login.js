import { Link } from "react-router-dom";

function Login() {
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
            <form action="" method="get" className="form">
              <div className="form">
                <div className="mb-2">
                  <span>Email</span>
                </div>
                <input
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
                  className="w-92"
                  type="text"
                  name="password"
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
