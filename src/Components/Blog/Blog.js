import React from 'react';
import Blogcard from './Blogcard';
import Blogdata from './Blogdata';

const Blogcards = () => {
  return (
    <div className="blog-card">
      <div className="container mt-5">
        <div className="row">
          {Blogdata.map((blog, index) => (
            <Blogcard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogcards;
