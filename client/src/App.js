import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar1 from "./components/NavbarComp";
import Footer from "./components/Footer";
import PlaceResult from "./pages/PlaceResult";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/PlaceResult" element={<PlaceResult />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
