import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signin",
        formData
      );
      if (response.data.success) {
        navigate("/profile");
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-100 max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 h-screen">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-left">
              Sign In to your PopX account
            </h1>
            <p className="text-gray-500 text-sm text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ullam ipsam architecto. Eveniet nulla voluptatum sequi
              voluptatibus earum!
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-indigo-700 mb-1"
              >
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  name="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">
                We'll never share your email.
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-indigo-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  name="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4"
              >
                Login
              </button>
              <Link to={"/"}>
                <button
                  className="w-full bg-indigo-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Back Home
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
