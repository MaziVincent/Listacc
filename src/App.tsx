import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<Header/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
