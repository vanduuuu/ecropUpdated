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
import IntroductionToSmartFarmingHoweCropIsTransformingAgriculture from './Components/Blog/IntroductionToSmartFarmingHoweCropIsTransformingAgriculture'
import Boost_profits_with_precision_farming_ecrop_action from './Components/Blog/Boost_profits_with_precision_farming_ecrop_action.js'
import Ecrop_The_Ultimate_IoT_Solution_For_Precision_Agriculture_In_2024 from './Components/Blog/Ecrop_The_Ultimate_IoT_Solution_For_Precision_Agriculture_In_2024'
import Ecrops_Role_In_Meeting_Global_Food_Security_Goals_By_2030 from './Components/Blog/Ecrops_Role_In_Meeting_Global_Food_Security_Goals_By_2030'
import Empowering_Small_Farmers_Ecrops_Affordable_Precision_Farming_Solutions from './Components/Blog/Empowering_Small_Farmers_Ecrops_Affordable_Precision_Farming_Solutions'
import How_Ecrop_Is_Revolutionizing_Modern_Farming_Practices from './Components/Blog/How_Ecrop_Is_Revolutionizing_Modern_Farming_Practices'
import Bridging_Gaps_In_Agriculture_Ecrops_Role_From_State_To_Panchayat_Levels from './Components/Blog/Bridging_Gaps_In_Agriculture_Ecrops_Role_From_State_To_Panchayat_Levels';
import Cut_Fertilizer_Costs_With_Ecrop_Technology from './Components/Blog/Cut_Fertilizer_Costs_With_Ecrop_Technology';
import Invest_In_Sustainable_Farming_With_Ecrop_Today from './Components/Blog/Invest_In_Sustainable_Farming_With_Ecrop_Today';
import Comprehensive_look_at_ecrop_soil_data_to_harvest_insights from './Components/Blog/Comprehensive_look_at_ecrop_soil_data_to_harvest_insights'
import Precision_Farming_For_Beginners_Guide_To_Using_Ecrop_Effectively from './Components/Blog/Precision_Farming_For_Beginners_Guide_To_Using_Ecrop_Effectively.js'
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
       <Route path="/Introduction_to_Smart_Farming_How_e-Crop_is_Transforming_Agriculture" element={<IntroductionToSmartFarmingHoweCropIsTransformingAgriculture/>} />
       <Route path="/Boost_profits_with_precision_farming_ecrop_action" element={<Boost_profits_with_precision_farming_ecrop_action/>} />
       <Route path="/Ecrop_The_Ultimate_IoT_Solution_For_Precision_Agriculture_In_2024" element={<Ecrop_The_Ultimate_IoT_Solution_For_Precision_Agriculture_In_2024/>} />
       <Route path="/Ecrops_Role_In_Meeting_Global_Food_Security_Goals_By_2030" element={<Ecrops_Role_In_Meeting_Global_Food_Security_Goals_By_2030/>} />
       <Route path="/Empowering_Small_Farmers_Ecrops_Affordable_Precision_Farming_Solutions" element={<Empowering_Small_Farmers_Ecrops_Affordable_Precision_Farming_Solutions/>} />
       <Route path="/How_Ecrop_Is_Revolutionizing_Modern_Farming_Practices" element={<How_Ecrop_Is_Revolutionizing_Modern_Farming_Practices/>} />
       <Route path="/Bridging_Gaps_In_Agriculture_Ecrops_Role_From_State_To_Panchayat_Levels" element={<Bridging_Gaps_In_Agriculture_Ecrops_Role_From_State_To_Panchayat_Levels/>} />
       <Route path="/Cut_Fertilizer_Costs_With_Ecrop_Technology" element={<Cut_Fertilizer_Costs_With_Ecrop_Technology/>} />
       <Route path="/Invest_In_Sustainable_Farming_With_Ecrop_Today" element={<Invest_In_Sustainable_Farming_With_Ecrop_Today/>} />
       <Route path="/Comprehensive_look_at_ecrop_soil_data_to_harvest_insights" element={<Comprehensive_look_at_ecrop_soil_data_to_harvest_insights/>} />
       <Route path="/Precision_Farming_For_Beginners_Guide_To_Using_Ecrop_Effectively" element={<Precision_Farming_For_Beginners_Guide_To_Using_Ecrop_Effectively/>} />
       
      
    </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
