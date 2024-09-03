import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import webfont from "webfontloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Explore from "./pages/Explore";
import Register from "./components/auth/Register";
function App() {
  // const [count, setCount] = useState(0);

  // useWebFontLoader();
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

const useWebFontLoader = () => {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Open Sans", "Lato", "Montserrat", "Merriweather"],
      },
    });
    // Add any other initialization logic here if needed
  }, []);
};
export default App;
