import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/cairothedino" style={ { color: colorPrimary } }><i className="fab fa-instagram"></i></a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
