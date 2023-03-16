import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import PlaceResult from "./pages/PlaceResult";

import i18n from "i18next";
import PlaceListing from "./pages/PlaceListing";

function App() {
  // i18n.changeLanguage("mr");

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="App">
      <NavbarComp lang={"en"} />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/PlaceResult" element={<PlaceResult />} />
          <Route exact path="/PlaceListing" element={<PlaceListing />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
