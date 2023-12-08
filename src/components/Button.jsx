import React from "react";

const Button = ({ styles ,  onClick }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={onClick}>
    Get in Touch
  </button>
);

export default Button;
