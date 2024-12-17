import React from 'react';
import { useLocation } from 'react-router-dom';
import Blogdata from './Blogdata';
import './Blogdetail.css'
import Breadcrumb from '../Breadcrumb';
const Ecrops_Role_In_Meeting_Global_Food_Security_Goals_By_2030 = () => {
  const location = useLocation();
  const blog = Blogdata.find((item) => item.detailPage === location.pathname);

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }
  const breadcrumbItems = [
    { label: 'Home', link: '/', active: false },
    { label: 'Blog', link: '/blog', active: false },
    { label: 'Blog Detail', active: true }, // Active item does not need a link
  ];
  return (
    <div className="container">
                  <Breadcrumb items={breadcrumbItems} />
      <div className="blog-detail">
        <div className='outer-blog-img'>
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        </div>
        <h2 className='mt-3'>{blog.title}</h2>
        <div className="blog-footer m-0">
          <p>
            <b>Author:</b> {blog.author}
          </p>
          <p>
            <b>Published Date:</b> {blog.date}
          </p>
        </div>
       <p>The Global Hunger Index means oversight of whether countries are attaining hunger-associated Sustainable Development Goals. India ranks 105th in the Global Hunger Index in 2024 and is denoted as having a serious” hunger crisis. The SDG has one of its main goals as zero hunger in that it gains global food security, increases nutrient content, and encourages sustainable agriculture.
       </p>
     
       <h5>Main targets for zero hunger:</h5>
       <ul>
        <li>1 - Global access to secure and nutritious food</li>
        <li>2 - Remove all types of malnutrition.</li>
        <li>3 - Increases income and productivity of small-scale farmers</li>
        <li>4 - Resilient agricultural systems and sustainably produce the food</li>
        <li>5 - Keep the genetic diversity of cultivated plants and seeds.</li>
        <li>6 - Enhance agricultural research and technology and rural infrastructure.</li>
        <li>7 - Avoid trade restrictions in agriculture, export subsidies, and market distortion.</li>
        <li>8 - Make sure accurate food commodity markets and facilitate timely access.</li>
       </ul>
      
    
       <h5>What information is provided by the e- Crop machine:</h5>
       <p>To solve all the global food security goals, the e-crop smart device is there; it provides climatic data like atmospheric humidity, maximum temperature, minimum temperature, solar radiation, rainfall, and wind velocity. The weather data provides information like date of planting, predicted yield, daily, weekly, and total crop duration water requirements, and disease and pest attack information.
</p>
<p>Soil sensors provide information like required amounts of soil temperature, soil pH, nitrogen, phosphorous, and potassium of the day, so all this information is provided by the e-Crop. So, this information helps in reducing yield gaps and obtaining targeted yields by applying only the required number of fertilizers and helps in reducing leaching losses, and in this way helps in increasing the crop yield.
</p>
     
       <h5>Role of NPK in plants:</h5>
       <p>The essential nutrients required by the plants are nitrogen, phosphorus, and potassium. Nitrogen plays a crucial role in the vegetative growth of the plants, phosphorus required in root growth and promotes flowering, and potassium provides disease resistance and strength to plants and plays an important role in photosynthesis and all these parameters are directly related to yield of crop.
       </p>
      
       <h5>How the e-Crop machine helps to cope with food security:</h5>
       <ul>
        <li>
            <p><strong>1 - Precise amount of fertilizer use:</strong> Sensors provide nitrogen, phosphorous, and potassium levels in the soil; with the help of that, farmers can add the required amount of fertilizer into the soil, so this helps in the overapplication of fertilizer. With the help of this device, it will help farmers to minimize the environmental impact. Plants grow well if a precise amount of fertilizer is given, so the crop yield depends on the precise amount of fertilizer, so it indirectly helps in securing global food.</p>
        </li>
        <li>
            <p><strong>2 - Reduced overapplication of fertilizer: </strong>Overapplication of fertilizer leads to toxicity, and it reduces the crop yield and indirectly shows an impact on food security. These machines help the farmers from overapplication of fertilizers and save the crops. Overapplication leads to eutrophication, which is harmful to the ecosystem and affects the environment.
            </p>
        </li>
        <li>
            <p><strong>3 - Saves the money:</strong> It saves the money of farmers because if a farmer knows how much amount of fertilizer they must apply, then it helps to reduce the unnecessary application of fertilizer and thereby saves the money.</p>
        </li>

        <li>
            <p><strong>4 - Maintain soil health:</strong>  By monitoring exact soil NPK levels, it helps in maintaining the soil health. It assures that soil remains productive or not. By maintaining the soil health, it also maintains the crop health and secures the food production.</p>
        </li>
        <li>
            <p><strong>5 - Helps in irrigation:</strong>  Soil moisture gives information about how much water is present in the soil. So, these sensors help in the efficient use of water and avoiding water stress, and proper management of soil moisture is directly related to crop productivity.</p>
        </li>
        
       </ul>
       <h5>NPK toxicity occurs in plants. Plants show various symptoms, and how it affects food hunger:</h5>
       <p>Leaf burn, chlorosis, root damage, and excessive vegetative growth reduce seed germination and growth and reduce photosynthesis. It reduces the yield and produces low-quality food. With low yield, it affects the food supply access.
       </p>
       <h5>How does the e-Crop machine help?</h5>
       <p>e-Crop’s soil sensor measures the exact amount of NPK in the soil and guides farmers to apply the exact number of fertilizers. It optimizes the plant growth and reduces the risk of food supply and food security.
       </p>
       <h5>Conclusion:</h5>
       <p>To meet the global food security needs, the farmers must maintain their soil health because the yield of crops depends on the soil health. The smart device, like e-Crop, helps in increasing the yield by maintaining soil health by using soil sensors. Farmers get information on nitrogen, phosphorus, potassium, soil temperature, soil pH, and moisture in the soil. So, farmers get an idea of when and how much to irrigate and how much fertilizer they must apply. The weather parameters like wind velocity, air temperature, humidity, and rainfall will help in predicting the yield of crops. So, in this way the e-Crop device helps in coping with global food security.
       </p>
      
      </div>
    </div>
  );
};

export default Ecrops_Role_In_Meeting_Global_Food_Security_Goals_By_2030;
