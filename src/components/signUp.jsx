import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("https://basic-auth-backend-kbst.onrender.com/api/signup", formData);
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
              ullam ipsam architecto.
            </p>
          </div>

          <form class="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullname"
                class="block text-sm font-medium text-indigo-700 mb-1"
              >
                Full Name
              </label>
              <div class="relative">
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={(e)=> setFormData(prev => ({...prev, fullname: e.target.value}))}
                  id="fullname"
                  name="fullname"
                  placeholder="Marry Doe"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                class="block text-sm font-medium text-indigo-700 mb-1"
              >
                Phone Number
              </label>
              <div class="relative">
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e)=> setFormData(prev => ({...prev, phoneNumber: e.target.value}))}
                  id="phone-number"
                  name="phone-number"
                  placeholder="Marry Doe"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
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
                  placeholder="Marry Doe"
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
                  placeholder="Marry Doe"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company-name"
                class="block text-sm font-medium text-indigo-700 mb-1"
              >
                Company Name
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="company-name"
                  value={formData.companyName}
                  onChange={(e)=> setFormData(prev => ({...prev, companyName: e.target.value}))}
                  name="company-name"
                  placeholder="Marry Doe"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex display-flex">
              <p>
                Are you a agency? <span className="color-indigo-700">*</span>
              </p>
              <div class="flex items-center mx-3">
                <input
                  type="checkbox"
                  id="yes"
                  name="yes"
                  checked={formData.isAgency === false}
                  onChange={(e)=> setFormData(prev => ({ ...prev, isAgency: true}))}
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="yes" class="ml-2 block text-sm text-gray-700">
                  Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="no"
                  checked={formData.isAgency === true}
                  onChange={(e)=> setFormData(prev => ({ ...prev, isAgency: false}))}
                  name="no"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="no" class="ml-2 block text-sm text-gray-700">
                  No
                </label>
              </div>
            </div>
            <div>
                <button
                  type="submit"
                  class="w-full bg-indigo-700 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4"
                >
                  Signup
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

export default SignUp;
