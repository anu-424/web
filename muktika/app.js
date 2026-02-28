import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Forum from "./Forum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Forum page after login/signup */}
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;