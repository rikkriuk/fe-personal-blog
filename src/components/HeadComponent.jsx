import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HeadComponent = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content="/default-image.jpg" />
      <meta property="og:url" content={window.location.href} /> */}
    </Helmet>
  );
};

HeadComponent.defaultProps = {
  title: "My Blog - Discover Amazing Content",
  description: "Welcome to My Blog, where you can find amazing content about various topics.",
  keywords: "blog, articles, content, amazing, topics",
};

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default HeadComponent;
