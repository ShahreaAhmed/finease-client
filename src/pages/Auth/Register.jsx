import React, { use } from "react";
import appLogo from "../../assets/appLogo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
    const {createUser, signInWithGoogle} = use(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();
        const displayName = event.target.displayName.value;
        const email = event.target.email.value;
        const photoURL = event.target.displayName.value;
        const password = event.target.password.value;
        console.log(displayName, email, photoURL, password)

        toast.loading("Creating user...", {id: "create-user"})

        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            toast.success("User created successfully!", {id: "create-user"});
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.message, {id: "create-user"});
        });
    };

    const handleGoogleSignIn = () => {
        toast.loading("Creating user...", {id: "create-user"});
        signInWithGoogle()
        .then((result) => {
            toast.success("User created successfully!", {id: "create-user"});
            console.log(result.user);
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.message, {id: "create-user"});
        });
    }
  return (
    <div className="bg-[#076adb] py-10">
      <div className="flex w-11/12 mx-auto">
        {/* <img className='w-[600px] h-[500px]' src={loginPng} alt="" /> */}
        <div className="hero min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">
                  Register
                </h1>
              <form onSubmit={handleRegister}>
                <img className="w-[100px]" src={appLogo} alt="" />
                <fieldset className="fieldset">
                    {/* name field */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="displayName"
                    className="input w-full"
                    placeholder="Your Name"
                  />
                  {/* email field */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  {/* photoURL field */}
                  <label className="label">photoURL</label>
                  <input
                    type="text"
                    name="photoURL"
                    className="input w-full"
                    placeholder="Photo Url"
                  />
                  {/* password field */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">
                  or Register in with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <FcGoogle className="w-4 h-12" />
                Register with Google
              </button>
              <p className="text-center">
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/auth/login">
            Login
          </Link>{" "}
        </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
