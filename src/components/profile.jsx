import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div class="min-h-screen bg-gray-50 py-3 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white shadow rounded-lg overflow-hidden w-100 h-screen">
          <div class="px-6 py-5 border-b border-gray-200">
            <h1 class="text-2xl font-bold text-gray-800">Account Settings</h1>
          </div>

          <div class="px-6 py-8">
            <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div class="relative">
                <div class="relative group">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt="profile-pic"
                    class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div class="absolute bottom-0 right-0 bg-indigo-500 text-white p-1 rounded-full transform translate-x-[-5px] -translate-y-5 transition duration-200">
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>

                
              </div>
              <div class="flex-2">
                  <p class="text-lg font-semibold text-gray-800">Marry Doe</p>
                  <p class="text-sm text-gray-500">MarryDoe@Gmail.com</p>
                </div>
            </div>

            <div class="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia inventore in libero placeat explicabo quo aliquam eius, adipisci quibusdam.
                <hr class="border-b-2 border-dotted border-gray-300 w-full h-px mt-4"/>
            </div>
            <Link to={"/"}>
                <button class="mt-12 w-full bg-indigo-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
