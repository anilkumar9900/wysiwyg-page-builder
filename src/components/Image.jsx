import React, { useState } from 'react';

const ImageEditor = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);  // Set the image source to the uploaded file
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-editor">
      <input type="file" onChange={handleImageUpload} />
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ width: '100%', height: 'auto' }} />}
    </div>
  );
};

export default ImageEditor;
