import React from 'react';
import { useLocation } from 'react-router-dom';
import Blogdata from './Blogdata';
import './Blogdetail.css';
import Breadcrumb from '../Breadcrumb';
import Seo from '../Seo';

const ComprehensiveLookAtEcropSoilData = () => {
  const location = useLocation();
  const blog = Blogdata.find((item) => item.detailPage === location.pathname);

  if (!blog) {
    return <h2 className="not-found">Blog Not Found</h2>;
  }

  const breadcrumbItems = [
    { label: 'Home', link: '/', active: false },
    { label: 'Blog', link: '/blog', active: false },
    { label: 'Blog Detail', active: true },
  ];

  return (
    <div className="container">
      {/* SEO Metadata */}
      <Seo
        title={blog.title}
        description={
          blog.metaDescription ||
          'Explore the powerful e-Crop device for modern agriculture. Learn how it provides critical soil data, like moisture, pH, and nitrogen levels, to optimize farming practices, improve yields, and promote sustainability.'
        }
        author={blog.author}
        image={blog.image}
        url={`https://ecrop.co.in${location.pathname}`}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Blog Content */}
      <div className="blog-detail">
        {/* Blog Image */}
        <div className="outer-blog-img">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        </div>

        {/* Blog Title */}
        <h2 className="mt-3">{blog.title}</h2>

        {/* Blog Metadata */}
        <div className="blog-footer m-0">
          <p>
            <strong>Author:</strong> {blog.author}
          </p>
          <p>
            <strong>Published Date:</strong> {blog.date}
          </p>
        </div>

        {/* Blog Main Content */}
        <p>
        e-Crop is a device for modern agriculture and an innovative solution for farmers. It helps in precise farming and sustainability. It also has lots of advantages. An electronic crop is a device that gives information on soil parameters, including soil nitrogen, soil potassium, soil phosphorous, soil temperature, soil moisture, soil EC, and soil pH.
        </p>

        {/* Sections on Soil Parameters */}
        <h5>Soil sensors and their key benefits:</h5>
        <p>
        The growth of the plants depends upon water, temperature, and fertilizers. If all these parameters are in sufficient amounts, the plant grows well.

        </p>

        <h4>Soil Temperature:</h4>
        <p>
        Soil temperature plays an important role in biological processes, plant growth, like seed germination, root development, plant emergence, and microbial activity, which play an important role in the decomposition of the organic matter and mineralization of nitrogen. e-Crop gives the value of soil temperature, so on that basis, farmers will get an idea.
        </p>

        <h4>Soil Moisture:</h4>
        <p>
        Soil moisture plays a crucial role in that crops get the right amount of water, which is important for crop growth. Too much water in the soil leads to nutrient losses and soil erosion, creates waterlogging conditions, and leads to root damage. These helps conserve the water by avoiding excess irrigation and reducing the soil runoff. Plant growth directly depends on soil moisture; maintaining proper soil moisture leads to strong root growth and indirectly leads to better uptake of nutrients and increases plant growth.</p>

        <h4>Soil EC:</h4>
        <p>
        The high EC indicates that over-fertilization is harmful to crop health. If the EC value is low, then it indicates that the plant cannot receive enough nutrients. So, in this way, EC plays an important role in balanced fertilization.
        </p>

        <h4>Soil pH:</h4>
        <p>
        By measuring soil pH, it will help the farmer to manage the soil. If the soil is more acidic, use the lime to reduce acidity. Soil acidity reduces using gypsum for reclamation of alkali soil. Too high a pH indicates toxicity or the accumulation of toxic elements; it affects the plant growth and root growth also.
        </p>

        <h4>Soil Nitrogen:</h4>
        <p>
        Nitrogen plays a crucial role in the vegetative growth of plants and gives a dark green color to plants; it is a component of chlorophyll, and it increases protein content. So, if a farmer gets information about how much quantity of water is present in the soil, then he applies only the required amount of fertilizer and reduces the over-fertilization. The overdose of nitrogen leads to leaves becoming soft and cells of the plant growing too much, so these are attacked by the pathogens.
        </p>

        <h4>Soil Phosphorus:</h4>
        <p>
        Phosphorus plays an important role in root development, increases resistance to plant disease, and improves the quality of crops. So, sensors give the information about how much amount is needed for that crop.
        </p>

        <h4>Soil Potassium:</h4>
        <p>
        Soil potassium helps in opening and closing the stomata and increases sugar and starch translocation. Potassium plays a major role in crop growth; plants have luxury consumption and, hence, are not toxic.
        </p>

        {/* Benefits of e-Crop */}
        <div>
          <h5>Benefits of e-Crop:</h5>
          <ul>
            <li><strong>Reduced the excess use of fertilization:</strong> Application of the exact amount of fertilizer, which reduces the cost of fertilizer and reduces the toxicity effect of fertilizer on the crop.</li>
            <li><strong>Increased yield:</strong> Applying the exact amount of fertilizer and irrigation maintains the crop's health and development.</li>
            <li><strong>Conservation of resources: </strong> The device will help in conserving the water and efficient use of fertilizer and lowering the operational cost.</li>
            <li><strong>Irrigation management:</strong> It suggests how much water is needed for the crop.</li>
            <li><strong>Fertilizer recommendation:</strong> How much fertilizer must be applied in the soil?</li>
            <li><strong>Management of disease and pest:</strong> weather and soil parameters crop device predict the disease and pest outbreaks.</li>
            <li><strong>Sustainability:</strong> Reducing chemical fertilizer and water use promotes sustainability.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <h5>Conclusion:</h5>
        <p>
        The e-Crop device is a solution for modern agriculture by providing soil and weather parameters value. It enables farmers to efficiently manage crops, increasing yield and efficient use of resources, and it is an essential tool for sustainable agriculture.
        </p>
      </div>
    </div>
  );
};

export default ComprehensiveLookAtEcropSoilData;
