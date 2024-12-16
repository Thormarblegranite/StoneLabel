import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import StickerPreview from '../components/StickerPreview';
import ProjectDetail from '../components/ProjectDetail';
import { Button } from '@mui/material';

const PrintPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [stickers, setStickers] = useState([]);
  const printRef = useRef();

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
      <ProjectDetail project={project} />
      <div ref={printRef}>
        {stickers.map(st => (
          <StickerPreview key={st._id} sticker={st} project={project} />
        ))}
      </div>
      <Button variant="contained" onClick={handlePrint}>Print Now</Button>
    </div>
  );
};

export default PrintPage;
