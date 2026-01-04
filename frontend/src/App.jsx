import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div> APp
      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </div>
  )
}

export default App
