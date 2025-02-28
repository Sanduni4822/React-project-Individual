import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Contactpage from "./pages/contactpage/Contactpage";  // Import your Contact page
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-[#1e0342] to-[#512da8] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />  {/* Add Contact Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
