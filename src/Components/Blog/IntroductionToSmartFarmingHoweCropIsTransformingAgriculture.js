import React from 'react';
import { useLocation } from 'react-router-dom';
import Blogdata from './Blogdata';
import './Blogdetail.css'
import Breadcrumb from '../Breadcrumb';
const BlogDetail = () => {
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
        <h5>Overview</h5>
       <p>The Food and Agriculture Organization (FAO) estimates that by 2050, global food production must grow by approximately 60% to sustain the needs of a projected population of 9.3 billion people. With the increasing need for more food, traditional farming is facing challenges. Farmers need to use new technologies to grow enough crops, meet people's needs, and manage the use of limited natural resources.</p>
       <p>This is where smart farming comes in. Smart farming uses modern technology to give farmers better tools to track, monitor, automate, and analyze their work. It helps in making farming more efficient and productive with advanced systems and equipment.</p>
       <p>This method collects data and provides real-time information about crop health, soil conditions, and other important elements by utilizing technology like sensors, drones, artificial intelligence, and the Internet of Things (IoT). The e-Crop device, one of the most innovative breakthroughs in this industry, is revolutionizing how farmers monitor yields, manage their crops, and address farming issues.</p>
       <h5>Smart farming with e-CROP</h5>
       <p>This e-crop device is designed for smart farming by simulating crop growth in real-time. The e-Crop IoT device, developed by ICAR-Central Tuber Crops Research Institute (ICAR-CTCRI) and recently granted an Indian patent, has been licensed to Precision Grow, a division of Tech Visit IT Pvt. Ltd. Mumbai facilitated by Agrinnovate, Indian Council of Agricultural Research (ICAR), New Delhi.</p>
       <p>On 5th June 2024, coinciding with World Environment Day, Precision Grow signed a contract for the manufacture and marketing of the innovative e-Crop technology. This farming approach uses modern technology and sustainable methods to grow more crops while reducing harm to the environment.</p>
       <h5>How e-Crop is transforming agriculture? </h5>
       <p>The future of smart agriculture is being shaped by technologies such as remote sensing that help manage more resources, increase output, and decrease waste. This e-Crop tool is revolutionizing agriculture in the following ways:</p>
       <ul className='list-style-square'>
        <li>
       
            <p><strong>Real-Time Data Collection- </strong>The device's main control unit is linked to sensors that gather different weather and soil data. Rainfall, light intensity, humidity, temperature, and soil moisture are among the data that e-Crop gathers. This allows farmers to know exactly what their crops need at any given time.</p>
        </li>
        <li>
            <p><strong>Precision Farming-</strong> A key part of smart farming is precision farming, which uses data and technology to make farming more accurate. In order to make better use of resources like water, fertilizer, and pesticides, tools like sensors, artificial intelligence (AI), and the Global Positioning System (GPS) help monitor crops, soil, and weather. As a result, farming methods become more sustainable, production rises, and expenses fall.</p>
        </li>
        <li><p><strong>Improved crop quality-</strong> The e-Crop device helps farmers improve crop quality by providing insights into crop health and spotting issues early. Using data to optimize resources and target specific areas, farmers can produce higher-quality, more pest- and disease-resistant crops.</p></li>
        <li><p><strong>Remote Monitoring and Advisory-</strong> Via SMS or smartphone app, this e-crop gadget advises farmers about crop status in real-time, even when they are not in the field. With the help of these updates, farmers can take immediate action by following advisories on fertilizer, irrigation, pest management, and crop schedules.</p></li>
        <li><p><strong>Sustainability-</strong> With the e-Crop smart technique, farmers can lower the use of chemicals on their crops and reduce the environmental impact of farming practices, leading to an eco-friendly approach to agriculture.</p></li>
       </ul>
       <h5>Impact of e-Crop on the Agricultural Sector</h5>
       <p>The e-Crop technology helps agronomists adapt to climate change, reduce environmental impact, and boost agricultural resilience. It increases production with fewer resources, ensures food security, and supports a healthier environment.</p>
       <p>Through technologies like sensors, drones, and AI, it enables more efficient irrigation, fertilization, pest control, and harvesting. This leads to improved crop quality, higher yields, and reduced environmental impact. </p>
       <p>Crops like cassava <i>(Manihot esculenta)</i> and sweet potato <i>(Ipomoea batatas)</i> benefit greatly from e-Crop technology. Real-time data on soil conditions, pest threats, and irrigation needs help optimize their growth, leading to higher yields and better quality.</p>
       <p>Additionally, e-Crop helps farmers minimize costs and risks while contributing valuable data to inform government policies and agricultural strategies, ultimately driving sustainable growth in the sector. </p>
       <h5>The Future of Smart Farming with E-Crop</h5>
       <p>Smart farming using e-crop has immense potential to revolutionize agriculture in the future. As technology evolves, the integration of e-cropping systems will increase, giving farmers access to cutting-edge tools such as better automation, AI-powered analytics, and sensors for precision farming.</p>
       <p>These innovations will enable more sustainable and efficient farming practices, increase productivity, and help farmers better manage resources. With the growing use of data and connectivity, e-Crop will play a pivotal role in shaping a more resilient, profitable, and environmentally conscious agricultural future.</p>
       <p><strong>In the hands of farmers, e-crop technology is no longer just a tool; it’s the blueprint for the next agricultural revolution. The journey of smart farming, driven by solutions like e-Crop, highlights how technology can pave the way for a more sustainable and prosperous future for agriculture. Governments, private sectors, and research institutions must collaborate to make these technologies affordable and accessible to all.</strong></p>
      </div>
    </div>
  );
};

export default BlogDetail;
