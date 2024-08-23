import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";


function App () {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
