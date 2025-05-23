import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://basic-auth-backend-1.onrender.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.data.success) {
          navigate("/signup");
        }
        setEmail(response.data.email);
        setFullname(response.data.fullname);
      } catch (error) {
        console.error("Profile Error: ", error);
      }
    }
    getData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-3 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden w-100 h-screen">
          <div className="px-6 py-5 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">
              Account Settings
            </h1>
          </div>

          <div className="px-6 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="relative group">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt="profile-pic"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute bottom-0 right-0 bg-indigo-500 text-white p-1 rounded-full transform translate-x-[-5px] -translate-y-5 transition duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-2">
                <p className="text-lg font-semibold text-gray-800">
                  {fullname}
                </p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            <div className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              mollitia inventore in libero placeat explicabo quo aliquam eius,
              adipisci quibusdam.
              <hr className="border-b-2 border-dotted border-gray-300 w-full h-px mt-4" />
            </div>
            <Link to={"/"}>
              <button className="mt-12 w-full bg-indigo-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
