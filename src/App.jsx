import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#1e0342] to-[#512da8] min-h-screen">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
