import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import Error404Page from "./pages/Error404Page";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card/:id" element={<LocationPage />} />
          <Route path="*" element={<Error404Page />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
