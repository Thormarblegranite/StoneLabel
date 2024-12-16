import React, { useEffect, useState } from 'react';
import API from '../api';
import { Typography } from '@mui/material';
import ProjectList from '../components/ProjectList';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <ProjectList projects={projects} />
    </div>
  );
};

export default HomePage;
