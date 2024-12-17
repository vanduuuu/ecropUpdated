import React from 'react';
import Blogcard from './Blogcard';
import Blogdata from './Blogdata';
import Breadcrumb from '../Breadcrumb';

const Blogcards = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/', active: false },
    { label: 'Blog', link: '/blog', active: false },
    { label: 'Data', active: true }, // Active item does not need a link
  ];
  return (
    <>
    <div className='container'>
    <Breadcrumb
           items={breadcrumbItems} />
    </div>
         
    <div className="blog-card">
      <div className="container mt-5">
        <div className="row">
          {Blogdata.map((blog, index) => (
            <Blogcard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Blogcards;
