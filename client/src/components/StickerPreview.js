
import React from 'react';

const StickerPreview = ({ sticker, project }) => {
  const { partName, imageUrl, dxfUrl, widthPreset } = sticker;
  const { jobName, address, logo } = project;

  const heightIn = 4;
  const widthIn = parseFloat(widthPreset.split('x')[1]);
  const scaleFactor = 40; // Adjust for preview size

  const style = {
    border: '1px solid #ccc',
    width: (widthIn * scaleFactor) + 'px',
    height: (heightIn * scaleFactor) + 'px',
    margin: '10px',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: '10px',
  };

  return (
    <div style={style}>
      {logo && (
        <img src={logo} alt="Logo" style={{ maxHeight: '30px', position: 'absolute', top: '5px', left: '5px' }} />
      )}
      <div style={{ position: 'absolute', top: '40px', left: '5px', fontSize: '12px', fontWeight: 'bold' }}>
        Job Name: {jobName}
      </div>
      <div style={{ position: 'absolute', top: '60px', left: '5px', fontSize: '12px', fontWeight: 'bold' }}>
        Address: {address}
      </div>
      <div style={{ position: 'absolute', bottom: '40px', left: '5px', fontSize: '14px', fontWeight: 'bold' }}>
        Part Name: {partName}
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
          <a href={dxfUrl} target="_blank" rel="noopener noreferrer" style={{color:'#14ffec'}}>DXF File</a>
        </div>
      )}
    </div>
  );
};

export default StickerPreview;
