import Header from "./Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Footer */}
      <Footer />
      {/* Toast container for notifications independent of the page, works on full website on every page*/}
      <ToastContainer />
    </div>
  );
}

export default App;
