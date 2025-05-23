import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        formData
      );
      if (response.data.success) {
        navigate("/login");
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
              ullam ipsam architecto.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-indigo-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullname: e.target.value,
                    }))
                  }
                  id="fullname"
                  name="fullname"
                  placeholder="Marry Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-indigo-700 mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                  id="phone-number"
                  name="phone-number"
                  placeholder="Marry Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
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
                  placeholder="Marry Doe"
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
                  placeholder="Marry Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-indigo-700 mb-1"
              >
                Company Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company-name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      companyName: e.target.value,
                    }))
                  }
                  name="company-name"
                  placeholder="Marry Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex display-flex">
              <p>
                Are you a agency?{" "}
                <span className="color-indigo-700">*</span>
              </p>
              <div className="flex items-center mx-3">
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  checked={formData.isAgency === false}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, isAgency: true }))
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="yes"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="no"
                  checked={formData.isAgency === true}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, isAgency: false }))
                  }
                  name="no"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label
                  htmlFor="no"
                  className="ml-2 block text-sm text-gray-700"
                >
                  No
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4"
              >
                Signup
              </button>
              <Link to={"/"}>
                <button
                type="button"
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

export default SignUp;
