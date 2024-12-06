import React from 'react';
import { Link } from 'react-router-dom';
import './Blogcard.css'; // Make sure this matches your structure
import authorpic from '../../assets/img/Amarben-Patni.webp'
const Blogcard = ({
  image,
  date,
  tag,
  title,
  subtitle,
  desc,
  author,
  avatar,
  comments,
  detailPage,
}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="blog-image">
          <img src={image} alt={title} />
          <div className={`date bg-${tag.toLowerCase()}`}>{date}</div>
          <div className={`tag bg-${tag.toLowerCase()}`}>{tag}</div>
        </div>
        <div className="blog-content">
          <div className="blog-title mb-2">{title}</div>
          <p className="blog-desc">
            {desc} <Link to={detailPage}>Read More</Link>
          </p>
          <div className="blog-footer">
            <div className="blog-avatar d-flex">
              <img src={authorpic} alt={author} />
              <span>{author}</span>

            </div>

            <button className="btn btn-sm">
              <i className="fa fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
