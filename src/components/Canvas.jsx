import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextEditor from './Button';
import ImageEditor from './Image';
import ButtonEditor from './Button'; // New Button editor component

const Canvas = () => {
  const [components, setComponents] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default background color
  const [isPreviewMode, setIsPreviewMode] = useState(false); // State for Preview Mode

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addComponent = (item) => {
    const newComponent = { type: item.type, id: Date.now() }; // Use id for key
    setComponents([...components, newComponent]);
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div
      ref={drop}
      style={{
        width: '100%',
        minHeight: '400px',
        backgroundColor: backgroundColor,
        border: '2px solid #ddd',
        position: 'relative',
        padding: '10px',
      }}
    >
      <div className="canvas-controls">
        <button onClick={togglePreviewMode}>
          {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
        </button>
        <input
          type="color"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
          title="Choose Canvas Background Color"
        />
      </div>

      {isPreviewMode ? (
        <div>
          {/* Render components without edit controls */}
          {components.map((component) => (
            <div key={component.id}>
              {component.type === 'text' && <div>Text</div>}
              {component.type === 'image' && <img src="" alt="Uploaded" />}
              {component.type === 'button' && <button>Click Me</button>}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* Render components with editing options */}
          {components.map((component) => (
            <div key={component.id} style={{ position: 'absolute' }}>
              {component.type === 'text' && <TextEditor />}
              {component.type === 'image' && <ImageEditor />}
              {component.type === 'button' && <ButtonEditor />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Canvas;
