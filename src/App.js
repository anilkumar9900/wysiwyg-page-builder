import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';

function App() {
  const [components, setComponents] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Toolbar setComponents={setComponents} />
        <Canvas components={components} setComponents={setComponents} />
      </div>
    </DndProvider>
  );
}

export default App;
