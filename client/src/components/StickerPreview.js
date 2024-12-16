
import React from 'react';

const StickerPreview = ({ sticker, project }) => {
  const { partName, imageUrl, dxfUrl, widthPreset } = sticker;
  const { jobName, address, logo } = project;

  const heightIn = 4;
  const widthIn = parseFloat(widthPreset.split('x')[1]);
  const isSmallSticker = widthIn <= 1; // Check if sticker width is 1 inch or smaller

  const style = {
    border: '1px solid #ccc',
    width: isSmallSticker ? (heightIn * 40) + 'px' : (widthIn * 40) + 'px',
    height: isSmallSticker ? (widthIn * 40) + 'px' : (heightIn * 40) + 'px',
    margin: '10px',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    transform: isSmallSticker ? 'rotate(90deg)' : 'none',
    transformOrigin: 'center',
  };

  const textStyle = {
    position: 'absolute',
    left: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
    writingMode: isSmallSticker ? 'vertical-rl' : 'horizontal-tb',
  };

  return (
    <div style={style}>
      {logo && (
        <img src={logo} alt="Logo" style={{ maxHeight: '30px', position: 'absolute', top: '5px', left: '5px' }} />
      )}
      <div style={{ ...textStyle, top: isSmallSticker ? '5px' : '40px' }}>
        Job Name: {jobName}
      </div>
      <div style={{ ...textStyle, top: isSmallSticker ? '30px' : '60px' }}>
        Address: {address}
      </div>
      <div style={{ ...textStyle, bottom: isSmallSticker ? '40px' : '5px' }}>
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
          textAlign: 'center',
          transform: 'translate(-50%, -50%)',
          fontSize: '12px'
        }}>
          <a href={dxfUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#14ffec' }}>DXF File</a>
        </div>
      )}
    </div>
  );
};

export default StickerPreview;
