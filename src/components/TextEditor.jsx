import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  return (
    <div className="text-editor">
      <ReactQuill theme="snow" />
    </div>
  );
};

export default TextEditor;
