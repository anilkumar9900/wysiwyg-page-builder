import React from 'react';
import { useDrag } from 'react-dnd';

const Toolbar = () => {
  // Define draggable components
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type: 'text' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isDraggingImg }, dragImg] = useDrag(() => ({
    type: 'component',
    item: { type: 'image' },
    collect: (monitor) => ({
      isDraggingImg: monitor.isDragging(),
    }),
  }));

  const [{ isDraggingBtn }, dragBtn] = useDrag(() => ({
    type: 'component',
    item: { type: 'button' },
    collect: (monitor) => ({
      isDraggingBtn: monitor.isDragging(),
    }),
  }));

  return (
    <div className="toolbar">
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <button>Text</button>
      </div>
      <div ref={dragImg} style={{ opacity: isDraggingImg ? 0.5 : 1 }}>
        <button>Image</button>
      </div>
      <div ref={dragBtn} style={{ opacity: isDraggingBtn ? 0.5 : 1 }}>
        <button>Button</button>
      </div>
    </div>
  );
};

export default Toolbar;
