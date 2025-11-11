import React, { use } from "react";
import loginPng from "../../assets/navbarPng.png";
import appLogo from "../../assets/appLogo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate(location.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
        console.log(result.user);
        navigate(location?.state || '/')
    })
    .catch((error) => {
        console.log(error);
    });

  }

  return (
    <div className="bg-[#076adb]">
      <div className="flex w-11/12 mx-auto">
        <img className="w-[600px] h-[500px]" src={loginPng} alt="" />
        <div className="hero min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <img className="w-[100px]" src={appLogo} alt="" />
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <fieldset className="fieldset">
                  {/* email field */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  {/* password field */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">
                  or sign in with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <FcGoogle className="w-4 h-12" />
                Login with Google
              </button>
              <p className="text-center">
                New to our website? Please{" "}
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to="/auth/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
