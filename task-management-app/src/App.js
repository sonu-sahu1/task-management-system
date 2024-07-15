import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/add-task" element={<CreateTask />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
