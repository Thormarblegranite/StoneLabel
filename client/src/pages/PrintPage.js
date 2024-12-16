
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
    <div style={{ padding: '20px', background: '#fff' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        pageBreakInside: 'avoid'
      }}>
        {stickers.map(st => (
          <div key={st._id} style={{
            pageBreakInside: 'avoid',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <StickerPreview sticker={st} project={project} />
          </div>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={handlePrint} style={{ marginTop: '20px' }}>
        Print Stickers
      </Button>
    </div>
  );
};

export default PrintPage;
