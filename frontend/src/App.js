import Header from "./Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.js";
import { Routes, Route } from "react-router-dom";
import Form from "./CMSAdmin/Forms/Forms.jsx";
import Signup from "./CMSAdmin/Auth/Signup/Signup.jsx";
import Login from "./CMSAdmin/Auth/Login/Login.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/*" element={<Form />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
      {/* Toast container for notifications independent of the page, works on full website on every page*/}
      <ToastContainer />
    </div>
  );
}

export default App;
