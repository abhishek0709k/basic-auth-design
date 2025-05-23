import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100 font-sans">
      <div className="relative bg-gray-20 p-8 rounded-lg shadow-md w-100 h-96 flex flex-col justify-end h-screen">
        <div className="mb-3 text-center">
          <h1 className="text-xl font-bold text-black mb-2 text-left">
            Welcome to PopX
          </h1>
          <p className="text-l text-gray-600 mb-6 text-left ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ullam
            ipsam architecto. Eveniet nulla voluptatum sequi voluptatibus earum!
          </p>

          <div className="flex flex-col gap-3">
            <Link
              to="/signup"
              className="bg-indigo-700 text-white py-2 rounded-md transition font-semibold"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="bg-indigo-300 text-black-700 font-semibold py-2 rounded-md transition "
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
