import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage.jsx"
import SignIn from "./components/signin.jsx"
import SignUp from "./components/signUp.jsx"
import Profile from "./components/profile.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp /> } />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
