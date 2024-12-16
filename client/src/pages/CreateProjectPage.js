
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import API from '../api';
import { Typography } from '@mui/material';

const CreateProjectPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async ({ logo, customerName, jobName, address }) => {
    try {
      setError(null);
      let logoUrl = '';

      if (logo) {
        const formData = new FormData();
        formData.append('file', logo);

        // Upload the logo file
        const uploadRes = await API.post('/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        logoUrl = uploadRes.data.fileUrl;
      }

      // Create the project
      const projectRes = await API.post('/api/projects', {
        logo: logoUrl,
        customerName,
        jobName,
        address
      });

      navigate(`/project/${projectRes.data._id}`);
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create the project. Please check your inputs and try again.');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Create New Project</Typography>
      {error && <Typography color="error" gutterBottom>{error}</Typography>}
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProjectPage;
