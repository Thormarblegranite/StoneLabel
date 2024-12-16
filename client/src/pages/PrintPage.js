
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import StickerPreview from '../components/StickerPreview';
import { Button } from '@mui/material';

const PrintPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    API.get(`/api/projects/${id}`)
      .then(res => {
        setProject(res.data.project);
        setStickers(res.data.stickers);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', background: '#121212' }}>
      {stickers.map(st => (
        <div key={st._id} style={{
          pageBreakAfter: 'always',
          margin: '0 auto',
          width: `${st.widthPreset.split('x')[1]}in`,
          height: '4in',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #fff',
          padding: '10px',
          background: '#2c2c2c',
          color: '#fff',
        }}>
          <StickerPreview sticker={st} project={project} />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handlePrint} style={{ marginTop: '20px' }}>
        Print Stickers
      </Button>
    </div>
  );
};

export default PrintPage;
