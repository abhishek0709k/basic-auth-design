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

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("https://basic-auth-backend-kbst.onrender.com/api/signin", formData)
      if(response.data.success){
        navigate("/profile")
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }
  return (
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="w-100 max-w-md">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden p-8 h-screen">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-2 text-left">
              Sign In to your PopX account
            </h1>
            <p class="text-gray-500 text-sm text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              ullam ipsam architecto. Eveniet nulla voluptatum sequi
              voluptatibus earum!
            </p>
          </div>

          <form class="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                class="block text-sm font-medium text-indigo-700 mb-1"
              >
                Email address
              </label>
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e)=> setFormData(prev => ({...prev, email: e.target.value}))}
                  name="email"
                  placeholder="Enter email address"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <p class="mt-1 text-xs text-gray-400">
                We'll never share your email.
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                class="block text-sm font-medium text-indigo-700 mb-1"
              >
                Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e)=> setFormData(prev => ({...prev, password: e.target.value}))}
                  name="password"
                  placeholder="Enter password"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-indigo-700 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4"
              >
                Login
              </button>
              <Link to={"/"}>
                <button
                type="submit"
                class="w-full bg-indigo-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
