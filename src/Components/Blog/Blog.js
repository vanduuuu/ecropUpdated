import React, { useState } from 'react';
import Blogcard from './Blogcard';
import Blogdata from './Blogdata';
import Breadcrumb from '../Breadcrumb';

const Blogcards = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/', active: false },
    { label: 'Blog', link: '/blog', active: true },
  ];

  // Sorting Blogdata by date (descending order)
  const sortedBlogdata = Blogdata.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination State
  const blogsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(sortedBlogdata.length / blogsPerPage);

  // Get blogs for the current page
  const currentBlogs = sortedBlogdata.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Generate pagination numbers
  const startNumber = currentPage <= 4 ? 1 : currentPage - 3;
  const endNumber = Math.min(totalPages, startNumber + 3);
  const paginationNumbers = Array.from({ length: endNumber - startNumber + 1 }, (_, i) => startNumber + i);

  // Handle Pagination Click
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="blog-card">
        <div className="container mt-5">
          <div className="row">
            {currentBlogs.map((blog, index) => (
              <Blogcard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-container d-flex justify-content-center my-4">
        <button
          className="btn pagebtn mx-1"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {paginationNumbers.map((number) => (
          <button
            key={number}
            className={`btn mx-1 ${number === currentPage ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}

        <button
          className="btn pagebtn mx-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Blogcards;
