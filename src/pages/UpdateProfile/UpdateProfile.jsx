import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
// import MyContainer from "../components/MyContainer";

const UpdateProfile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateProfileFunc(name, photo)
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
        toast.success("Profile updated successfully!");
        navigate("/my-profile-page"); 
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-green-50 py-30">
    {/* <MyContainer> */}
      <div className="flex justify-center items-center md:min-h-screen ">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            Update Profile
          </h2>

          <img
            src={photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User"
            className="w-28 h-28 mx-auto rounded-full border-4 border-green-300 mb-4"
          />

          <div className="text-left space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-green-600">
                New Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter new name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-green-600">
                New Photo URL
              </label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter photo URL"
              />
            </div>
          </div>

          <button
            onClick={handleUpdate}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    {/* </MyContainer> */}
    </div>
  );
};

export default UpdateProfile;
