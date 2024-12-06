import Navbar from './Components/Headfoot/Navbar/Navbar';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from './Components/Headfoot/Footer/Footer';
import Home from './Components/Home/Home.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';
import FAQ from './Components/FAQ/FAQ.js';
import Gallery from './Components/Gallery/Gallery.js';
import About from './Components/About/About.js';
import Sustainability from './Components/Sustainability/Sustainability.js';
import Ecrop from './Components/Ecrop/Ecrop.js';
 import ApplicationOfDevice from './Components/Services/SubServices/ApplicationOfDevice.js'; 
import Farmmanagement from './Components/Services/SubServices/Farmmanagement.js'; 
import Interface from './Components/Services/SubServices/Interface.js'; 
import ScrollToTop from './Components/Scroll/Scrolltotop.js';
import Blog from './Components/Blog/Blog.js';
import Blogdetail from './Components/Blog/Blogdetail.js';
function App() {
  return (
    <div> 
       <BrowserRouter >
        <Navbar/>
        <ScrollToTop/>
       <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/faq" element={<FAQ/>} />
       <Route path="/gallery" element={<Gallery/>} />
       <Route path="/Sustainability" element={<Sustainability/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/ecrop" element={<Ecrop/>} />
       <Route path="/farmmanagement" element={<Farmmanagement/>} />
       <Route path="/interface" element={<Interface/>} />
       <Route path="/ApplicationOfDevice" element={<ApplicationOfDevice/>} />
       {/* <Route path="/ApplicationOfDevice" element={<ApplicationOfDevice/>} /> */}
       <Route path="/blog" element={<Blog/>} />
       <Route path="/blogdetail" element={<Blogdetail/>} />
       
    
    </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
