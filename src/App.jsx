import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import PricePage from "./pages/PricePage/PricePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import StudiosPage from "./pages/StudiosPage/StudiosPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/HeaderGeneral/HeaderGeneral";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* <Route path="/shop" element={<ProductsPage />} /> */}
        <Route path="/price" element={<PricePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/studios" element={<StudiosPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
