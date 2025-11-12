import React, { useContext } from "react";

import { useNavigate } from "react-router";
// import MyContainer from "../components/MyContainer";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="bg-green-50 py-30 ">
    {/* <MyContainer> */}
      <div className="flex justify-center items-center md:min-h-screen bg-green-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            My Profile
          </h2>

          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User"
            className="w-28 h-28 mx-auto rounded-full border-4 border-green-300 mb-4"
          />

          <p className="text-gray-700 mb-1 text-lg">
            <span className="font-semibold">Name:</span>{" "}
            {user?.displayName || "No Name Added"}
          </p>

          <p className="text-gray-700 mb-6 text-lg">
            <span className="font-semibold">Email:</span>{" "}
            {user?.email || "No Email Found"}
          </p>

          <button
            onClick={() => navigate("/update-profile")}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Update Profile
          </button>
        </div>
      </div>
    {/* </MyContainer> */}
    </div>
  );
};

export default ProfilePage;