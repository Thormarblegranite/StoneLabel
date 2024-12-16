import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import API from '../api';
import { Typography } from '@mui/material';

const CreateProjectPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({ logo, customerName, jobName, address }) => {
    let logoUrl = '';
    if (logo) {
      const formData = new FormData();
      formData.append('file', logo);
      const uploadRes = await API.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      logoUrl = uploadRes.data.fileUrl;
    }

    const projectRes = await API.post('/api/projects', {
      logo: logoUrl,
      customerName,
      jobName,
      address
    });
    navigate(`/project/${projectRes.data._id}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Create New Project</Typography>
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProjectPage;
