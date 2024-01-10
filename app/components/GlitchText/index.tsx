import React from "react";

interface GlitchTextProps {
  text?: string;
  size?: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, size, className }) => {
  return (
    <span
      data-text={text ? text : "JM CO."}
      className={`glitch ${size ? size : "text-xl"} ${className}`}
    >
      <mark className={`glitch ${className} ${size ? size : "text-xl"}`}>
        {text ? text : "JM CO."}
      </mark>
    </span>
  );
};

export default GlitchText;
