import React from 'react'

const Button = ({ 
  children, 
  bgColor = '#463acb',
  textColor = '#ffffff',
  border = false,
  borderColor = '#463acb',
  borderWidth = '1',
  hoverBgColor,
  hoverTextColor,
  hoverBorderColor,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`px-7 py-3 mx-3 text-sm rounded-full transition-all duration-300 ${className}`}
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
        border: border ? `${borderWidth}px solid ${borderColor}` : 'none'
      }}
      onMouseEnter={(e) => {
        // Apply hover styles
        if (hoverBgColor) e.target.style.backgroundColor = hoverBgColor;
        if (hoverTextColor) e.target.style.color = hoverTextColor;
        if (hoverBorderColor && border) e.target.style.borderColor = hoverBorderColor;
      }}
      onMouseLeave={(e) => {
        // Revert to original styles
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = textColor;
        if (border) e.target.style.borderColor = borderColor;
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;