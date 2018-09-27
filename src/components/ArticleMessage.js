import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from './FooterSlim';
import Header from './Header/HeaderComponent';

const ArticleMessage = ({
  firstText,
  secondText,
  path,
}) => (

  <div id="success">
    <Header text="Home" pathname="/" />
    <div className="success-box">
      <h3>
        {firstText}
        <Link id="bold" to={path}> here </Link>
        {secondText}
      </h3>
    </div>
    <Footer />
  </div>
);

ArticleMessage.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ArticleMessage;