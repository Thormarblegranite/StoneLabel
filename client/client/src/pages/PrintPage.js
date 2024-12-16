
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
    <div>
      <div className="no-print" style={{ padding: '20px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print Stickers
        </Button>
      </div>
      {stickers.map(st => (
        <div
          key={st._id}
          className="print-only"
          style={{
            width: `${st.widthPreset.split('x')[1]}in`,
            height: '4in',
            border: '1px solid #000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StickerPreview sticker={st} project={project} />
        </div>
      ))}
    </div>
  );
};

export default PrintPage;
