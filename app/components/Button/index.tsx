import React from "react";

export interface ButtonProps {
  buttonColor?: string;
  textColor: string;
  label: string;
  link: string;
  showMobile?: boolean;
  hoverRed?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonColor,
  textColor,
  label,
  link,
  hoverRed,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${buttonColor} ${textColor} ${
        hoverRed ? "hover:bg-teal-500" : "hover:bg-red-500"
      } ease-in-out duration-300 px-4 py-2 border border-white capitalize shadow-md`}
      {...props}
    >
      <a href={link}></a>
      {label}
    </button>
  );
};

export default Button;
