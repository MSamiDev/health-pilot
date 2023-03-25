import "./assets/scss/main.scss";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ChatBot from "./components/chatBot/App";
import About from "./components/about";
import Contact from "./components/contact";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/UserForm";
import FunBot from "./components/funBot";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/funbot" element={<FunBot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
