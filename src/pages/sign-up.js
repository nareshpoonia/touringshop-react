import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div class="pt-8 flex">
      <aside class="sidebar-log mr-4">
        <img
          class="responsive-image"
          src="/images/signup.jpeg"
          alt="A girl on a motorcylce"
        />
      </aside>
      <main class="products-display grow flex-center flex-col">
        <div>
          <form action="" method="get" class="form-example">
            <div class="form">
              <div class="mb-2">
                <span>First Name</span>
              </div>
              <input class="w-92" type="text" name="name" id="name" required />
            </div>
            <div class="form">
              <div class="my-2">
                <span>Last Name</span>
              </div>
              <input class="w-92" type="text" name="name" id="name" required />
            </div>
            <div class="form">
              <div class="my-2">
                <span>Email</span>
              </div>
              <input
                class="w-92"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div class="form">
              <div class="my-2">
                <span class="password">Password</span>
              </div>
              <input
                class="w-92"
                type="text"
                name="password"
                id="password"
                required
              />
              <i class="fa fa-eye-slash hide-password-2" aria-hidden="true"></i>
            </div>
            <div class="form">
              <div class="my-2">
                <span class="password">Confirm Password</span>
              </div>
              <input
                class="w-92"
                type="text"
                name="password"
                id="password"
                required
              />
              <i class="fa fa-eye-slash hide-password-3" aria-hidden="true"></i>
            </div>
            <div>
              <input class="my-4" type="checkbox" id="gift" name="gift" />
              <label class="fs-5 mx-4" for="gift">
                I agree to Terms & Conditions
              </label>
            </div>
            <div class="form">
              <input class="btn-link w-92" type="submit" value="Sign In" />
            </div>
            <div class="mt-8 fs-5">
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
