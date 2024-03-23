import "./App.css";
import DiscountTopbar from "./components/DiscountTopbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <DiscountTopbar />
      <div className="home-container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
