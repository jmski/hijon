import React from "react";

export interface ButtonProps {
  buttonColor: string;
  textColor: string;
  label: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonColor,
  textColor,
  label,
  link,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${buttonColor} hover:bg-coral ${textColor} hover:text-bluey-dark ease-in-out duration-300 px-4 py-2 rounded-lg capitalize`}
      {...props}
    >
      <a href={link}></a>
      {label}
    </button>
  );
};

export default Button;
