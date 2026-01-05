import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div> APp
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </div>
  )
}

export default App
