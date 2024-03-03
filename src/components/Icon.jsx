import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

const Icon = ({ iconName, size, iconType, onClick, url }) => {
  let iconContent;

  if (iconType === 'custom') {
    iconContent = (
      <img src={url} alt={iconName} style={{ width: size, height: size }} />
    );
  } else {
    // Handle FontAwesome icons
    let icon;
    if (iconType === 'brand') {
      icon =
        BrandIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
    } else {
      // Default to solid if iconType is not 'brand'
      icon =
        SolidIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
    }

    // Fallback to a default icon if icon is not found
    const defaultIcon = SolidIcons.faQuestionCircle;
    icon = icon || defaultIcon;

    iconContent = <FontAwesomeIcon icon={icon} size={size} onClick={onClick} />;
  }

  return iconContent;
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconType: PropTypes.oneOf(['solid', 'brand', 'custom']),
  onClick: PropTypes.func,
  url: PropTypes.string,
};

Icon.defaultProps = {
  size: '1x',
  iconType: 'solid',
  onClick: () => {},
  url: null,
};

export default Icon;
