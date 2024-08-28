import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import webfont from "webfontloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  // const [count, setCount] = useState(0);

  // useWebFontLoader();
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
