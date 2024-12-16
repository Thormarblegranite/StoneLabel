import React from 'react';

const StickerPreview = ({ sticker, project }) => {
  const { partName, imageUrl, dxfUrl, widthPreset } = sticker;

  const heightIn = 4;
  const widthIn = parseFloat(widthPreset.split('x')[1]);
  const scaleFactor = 40;

  const style = {
    border: '1px solid #ccc',
    width: (widthIn * scaleFactor) + 'px',
    height: (heightIn * scaleFactor) + 'px',
    margin: '10px',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'top'
  };

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div style={style}>
        {project.logo && (
          <img src={project.logo} alt="Logo" style={{ maxHeight: '30px', position: 'absolute', top: '5px', left: '5px' }} />
        )}
        <div style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '14px', fontWeight: 'bold' }}>
          {partName}
        </div>
        {imageUrl && !dxfUrl && (
          <img src={imageUrl} alt="Sticker" style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            maxHeight: '70%', 
            maxWidth: '90%'
          }} />
        )}
        {dxfUrl && (
          <div style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            textAlign:'center', 
            transform: 'translate(-50%, -50%)', 
            fontSize: '12px' 
          }}>
            <a href={dxfUrl} target="_blank" rel="noopener noreferrer" style={{color:'#1976d2'}}>DXF File</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickerPreview;