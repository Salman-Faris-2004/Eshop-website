import React from 'react'

const Buttons = ({ text, bgcolor, textColor, handler }) => {
  return (
    <button 
      onClick={handler} // Assuming you may want a click handler
      className={`${bgcolor} ${textColor} cursor-pointer font-semibold rounded-full py-2 px-8 hover:scale-105 duration-300 relative z-10`}
    >
      {text}
    </button>
  );
}

export default Buttons;
