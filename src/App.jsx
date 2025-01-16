import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import useScrollAnimations from './components/useScrollAnimation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import FloatingButtons from './components/Floatingbutton';
import SuperJumbosteel from './products/superJumbosteel';
import ScrollToTop from './components/ScrollToTop';
import PrinceJumbosteel from './products/princeJumbosteel';
import SuperJumbowhite from './products/superJumbowhite';
import PrinceJumbowhite from './products/princeJumbowhite';
import DoubleFoldstand from './products/doubleFoldstand';
import TripleFoldstand from './products/tripleFoldstand';
import NotFoundPage from './pages/NotFoundPage';
function App() {

  useScrollAnimations();

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products/super-jumbo-steel" element= {<SuperJumbosteel/>}/>
          <Route path="/products/prince-jumbbo-steel" element= {<PrinceJumbosteel/>}/>
          <Route path="/products/super-jumbo-white" element= {<SuperJumbowhite/>}/>
          <Route path="/products/prince-jumbo-white" element = {<PrinceJumbowhite/>}/>
          <Route path="/products/double-fold-drying-stand" element = {<DoubleFoldstand/>} />
          <Route path="/products/triple-fold-drying-stand" element = {<TripleFoldstand/>} />
          <Route path="/products/404-upcomming-product" element= {<NotFoundPage/>}/>
        </Routes>
      </div>
      <FloatingButtons/>
      <Footer/>
    </Router>
  );
}

export default App;
