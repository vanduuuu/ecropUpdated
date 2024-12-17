import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Blog/Blog.css'
const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className='bb shadow-none'>
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.active ? 'active' : ''}`}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.active ? (
              item.label
            ) : (
              <Link to={item.link}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Text to display
      link: PropTypes.string,             // Route link (undefined for active items)
      active: PropTypes.bool.isRequired,  // Whether the item is the current page
    })
  ).isRequired,
};

export default Breadcrumb;
