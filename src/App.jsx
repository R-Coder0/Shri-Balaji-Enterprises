import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import useScrollAnimations from "./components/useScrollAnimation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import FloatingButtons from "./components/Floatingbutton";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import Loader from "./components/Loader";
import Dummy from "./products/Dummy";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import MiniStar from "./products/miniStar";
import MiniStarSmall from "./products/miniStar1";
import HardRock from "./products/hardRock";
import HardRockHeavy from "./products/hardRockHeavy";
import BrightFullSteel from "./products/brightFullSteel";
import FullSteelButterFly from "./products/fullSteelButterfly";
import ButterFLyWhite from "./products/butterflyWhite";
import RoyalJumboWhite from "./products/royalJumboWhite";
import HardRockWheel from "./products/hardRockWheel";
import SkyHigh from "./products/skyHigh";
import RoyalJumboSteel from "./products/royalJumboSteel";
import ShoeRackSteel from "./products/shoeRackSteel";
import ShoeRackWhite from "./products/shoeRackWhite";
import Ladder from "./products/Ladder";
import IronningTable from "./products/IronningTable";
import LandingPage from "./pages/LandingPage";
// Lazy load product pages
const SuperJumbosteel = React.lazy(() => import("./products/superJumbosteel"));
const PrinceJumbosteel = React.lazy(() =>
  import("./products/princeJumbosteel")
);
const SuperJumbowhite = React.lazy(() => import("./products/superJumbowhite"));
const PrinceJumbowhite = React.lazy(() =>
  import("./products/princeJumbowhite")
);
const DoubleFoldstand = React.lazy(() => import("./products/doubleFoldstand"));
const TripleFoldstand = React.lazy(() => import("./products/tripleFoldstand"));

function App() {
  useScrollAnimations();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AnimatePresence exitBeforeEnter>
          <ScrollToTop />
          {location.pathname !== "/landing-page" &&<Navbar /> }
          <div className="font-sans">
            <Routes>
              <Route path="/landing-page" element={<LandingPage/>}/>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/products/super-jumbo-steel"
                element={<SuperJumbosteel />}
              />
              <Route
                path="/products/prince-jumbo-steel"
                element={<PrinceJumbosteel />}
              />
              <Route
                path="/products/super-jumbo-white"
                element={<SuperJumbowhite />}
              />
              <Route
                path="/products/prince-jumbo-white"
                element={<PrinceJumbowhite />}
              />
              <Route
                path="/products/sumo-steel"
                element={<DoubleFoldstand />}
              />
              <Route
                path="/products/sumo-white"
                element={<TripleFoldstand />}
              />
              <Route path="/products/mini-star" element={<MiniStar />} />
              <Route
                path="/products/mini-star-small"
                element={<MiniStarSmall />}
              />
              <Route path="/products/Hard-Rock" element={<HardRock />} />

              <Route
                path="/products/Hard-Rock-Heavy"
                element={<HardRockHeavy />}
              />
              <Route
                path="/products/Hard-Rock-wheel"
                element={<HardRockWheel />}
              />
              <Route
                path="/products/bright-full-steel"
                element={<BrightFullSteel />}
              />
              <Route
                path="/products/full-steel-butterfly"
                element={<FullSteelButterFly />}
              />
              <Route
                path="/products/butterfly-white"
                element={<ButterFLyWhite />}
              />
              <Route
                path="/products/royal-jumbo-steel"
                element={<RoyalJumboSteel />}
              />
              <Route
                path="/products/royal-jumbo-white"
                element={<RoyalJumboWhite />}
              />
              <Route
                path="/products/sky-high"
                element={<SkyHigh />}
              />
              <Route
                path="/products/shoes-rack-steel"
                element={<ShoeRackSteel />}
              />
              <Route
                path="/products/shoes-rack-white"
                element={<ShoeRackWhite />}
              />
              <Route
                path="/products/ladder"
                element={<Ladder />}
              />
              <Route
                path="/products/ironing-table"
                element={<IronningTable />}
              />
              <Route path="/products/Dummy" element={<Dummy />} />
              <Route
                path="/products/404-upcomming-product"
                element={<NotFoundPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <FloatingButtons />
          {location.pathname !== "/landing-page" && <Footer />}
        </AnimatePresence>
      </Suspense>
    </Router>
  );
}

export default App;
