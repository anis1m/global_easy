import { use, useEffect, useState } from "react";
import Metroopage from "./javascript_file/Metroopage";
import Card from "./javascript_file/Card";
import About from "./javascript_file/About";
import Footer from "./javascript_file/Footer";
import Rubbercard from "./javascript_file/Rubbercard";
import Deired from "./javascript_file/Deired";
import Woven from "./javascript_file/Woven";
import Services from "./javascript_file/Services";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Metroopage />
            <Card />
            <About />
            <Footer />
          </>
        }
      />
      <Route path="/services" element={<Services />} />
      <Route path="/woven" element={<Woven />} />
      <Route path="/deired" element={<Deired />} />
      <Route path="/rubbercard" element={<Rubbercard />} />
    </Routes>
  );
}

export default App;
