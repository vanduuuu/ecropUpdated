import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, description, keywords, author, image, url, type = 'article' }) => (
  <Helmet>
    <title>{title} - Blog</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
  </Helmet>
);

export default Seo;
