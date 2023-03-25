import "./assets/scss/main.scss";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ChatBot from "./components/chatBot/App";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/funbot" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/userform" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
