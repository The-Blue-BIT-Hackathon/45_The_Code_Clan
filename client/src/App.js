import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Hotels from "./pages/Hotels";
import Ways from "./pages/Ways";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />} /> */}
          {/* <Route exact path="/" element={<Hotels />} /> */}
          <Route exact path="/" element={<Ways />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
