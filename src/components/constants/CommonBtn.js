import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CommonBtn = ({ 
  color, 
  variant, 
  title, 
  onClick, 
  width, 
  height, 
  customColor, 
  trailingIcon, 
  ...rest 
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      sx={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        // ...(customColor && { backgroundColor: customColor, color: 'white', '&:hover': { backgroundColor: customColor } }),
      }}
      {...rest}
    >
      {title}
      {trailingIcon && (
        <span style={{ display: 'flex', alignItems: 'center' }}>{trailingIcon}</span>
      )}
    </Button>
  );
};

CommonBtn.propTypes = {
  color: PropTypes.string, // Material-UI predefined colors
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  customColor: PropTypes.string, // Custom color for button background
  trailingIcon: PropTypes.node, // Accepts a React node for trailing icon
};

CommonBtn.defaultProps = {
  color: 'primary',
  variant: 'contained',
  onClick: () => {},
  width: 'auto',
  height: 'auto',
  customColor: null,
  trailingIcon: null, // No icon by default
};

export default CommonBtn;