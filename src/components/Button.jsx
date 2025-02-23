import React, { useState } from 'react';

const ButtonEditor = () => {
  const [buttonText, setButtonText] = useState('Click Me');
  const [buttonColor, setButtonColor] = useState('#007bff');
  const [fontSize, setFontSize] = useState('16px');

  const handleTextChange = (e) => {
    setButtonText(e.target.value);
  };

  const handleColorChange = (e) => {
    setButtonColor(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="button-editor">
      <input
        type="text"
        value={buttonText}
        onChange={handleTextChange}
        placeholder="Button Text"
      />
      <input
        type="color"
        value={buttonColor}
        onChange={handleColorChange}
        title="Choose Button Color"
      />
      <input
        type="number"
        value={parseInt(fontSize, 10)}
        onChange={handleFontSizeChange}
        placeholder="Font Size"
      />

      <button
        style={{
          backgroundColor: buttonColor,
          fontSize: fontSize + 'px',
          padding: '10px 20px',
          border: 'none',
          color: 'white',
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonEditor;
