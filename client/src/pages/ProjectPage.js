import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api';
import ProjectDetail from '../components/ProjectDetail';
import StickerForm from '../components/StickerForm';
import StickerPreview from '../components/StickerPreview';
import { Button, Typography } from '@mui/material';

const ProjectPage = () => {
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

  const addSticker = async ({ partName, widthPreset, file, isDXF }) => {
    let fileUrl = '';
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const uploadRes = await API.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      fileUrl = uploadRes.data.fileUrl;
    }

    const stickerRes = await API.post(`/api/stickers/${id}`, {
      partName,
      widthPreset,
      imageUrl: !isDXF ? fileUrl : '',
      dxfUrl: isDXF ? fileUrl : ''
    });

    setStickers(prev => [...prev, stickerRes.data]);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <ProjectDetail project={project} />
      <Typography variant="h6" sx={{ mb:2 }}>Add Stickers</Typography>
      <StickerForm onSubmit={addSticker} />

      {stickers.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt:4 }}>Stickers</Typography>
          <div>
            {stickers.map(st => (
              <StickerPreview key={st._id} sticker={st} project={project} />
            ))}
          </div>
          <Button variant="contained" component={Link} to={`/project/${id}/print`} sx={{ mt: 4 }}>
            Print Stickers
          </Button>
        </>
      )}
    </div>
  );
};

export default ProjectPage;