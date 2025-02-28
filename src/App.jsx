import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import necessary components for routing
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/Footer";  // Import Footer component

function App() {
  return (
    <Router>  {/* Wrap your entire app in Router for routing functionality */}
      <div className="bg-gradient-to-r from-[#1e0342] to-[#512da8] min-h-screen">
        <Navbar />  {/* Display the navigation bar */}
        <Routes>  {/* Define your routes */}
          <Route path="/" element={<Homepage />} />  {/* Homepage route */}
        </Routes>
        <Footer />  {/* Footer will appear on every page */}
      </div>
    </Router>
  );
}

export default App;
