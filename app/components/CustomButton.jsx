import React from 'react'

const CustomButton = ({ btnType, title, styles, handleClick, disabled }) => {
  return (
    <button
      type={btnType}
      className={`  ${styles}   `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton