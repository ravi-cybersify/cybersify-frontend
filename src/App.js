import logo from './logo.svg';
import './App.css';
import Home from './Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SectionOne from './Components/SectionOne';
import Banner from './Components/banner';
import Contact from './Components/SectionOne/Contact';
import BestSolution from './Components/BestSolution';
import Servicespage from './Components/SectionOne/Servicepage';
import Portfolio from './Components/SectionOne/Portfolio';
import Aboutpage from './Components/SectionOne/Aboutpage';
import Contact_page from './Components/SectionOne/Contact_page';
import ScrollToTop from './Components/SectionOne/ScrollToTop';
import Termcondition from './Components/SectionOne/Termcondition';
import Testimonial from './Components/SectionOne/Testimonial'
import PageNotFound from './Components/SectionOne/PageNotFound'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Servicespage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-us" element={<Aboutpage />} />
            <Route path="/contact-us" element={<Contact_page />} />
            <Route path="/term-condition" element={<Termcondition />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/404" element={<PageNotFound />} />
          	<Route path="*" element={<Navigate to="/404" />} />
            
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
