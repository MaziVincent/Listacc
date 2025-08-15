import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Services from "./components/home/Services";
import Footer from "./components/home/Footer";
import Contact from "./components/home/Contact";

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<Header/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
